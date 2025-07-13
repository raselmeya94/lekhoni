import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from datetime import datetime
# from  image_preprocessing import preprocess_image
from flask import Flask, send_file,request, send_file, abort
import os
import shutil
import tempfile
import zipfile

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
# processed_dir='processed'
CSV_FILE = 'labels.csv'


if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def load_or_create_csv():
    # If CSV is missing or empty, recreate it
    if not os.path.exists(CSV_FILE) or os.path.getsize(CSV_FILE) == 0:
        print("[INFO] Creating new labels.csv")
        df = pd.DataFrame(columns=['filename', 'label', 'timestamp', 'file_path'])
        df.to_csv(CSV_FILE, index=False)
    else:
        try:
            # Try reading
            pd.read_csv(CSV_FILE)
        except pd.errors.EmptyDataError:
            print("[WARNING] Empty CSV detected. Reinitializing...")
            df = pd.DataFrame(columns=['filename', 'label', 'timestamp','file_path'])
            df.to_csv(CSV_FILE, index=False)

# initialize on startup
load_or_create_csv()

@app.route('/upload', methods=['POST'])
def upload():
    try:
        if 'image' not in request.files or 'label' not in request.form:
            return jsonify({'error': 'No image or label provided'}), 400

        image = request.files['image']
        label = request.form['label'].strip()

        if image.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        # Save image
        timestamp_str = datetime.now().strftime('%Y%m%d_%H%M%S_%f')
        filename = f"{label}_{timestamp_str}.png"
        # Create label directory if it doesn't exist
        label_path = os.path.join(UPLOAD_FOLDER, label)
        os.makedirs(label_path, exist_ok=True)  # Ensure folder exists

        # Full file path
        filepath = os.path.join(label_path, filename)
        
        # label_path_processed = os.path.join(processed_dir, label)
        # os.makedirs(label_path_processed, exist_ok=True)  # Ensure folder exists

        # # Full file path
        # filepath_processed = os.path.join(label_path_processed, filename)

        # Save the image
        image.save(filepath)
        # preprocess_image(filepath, filepath_processed, final_size=(64, 64))
        # Save to CSV
        new_row = {
            'filename': filename,
            'label': label,
            'timestamp': datetime.now().isoformat(),
            'file_path':filepath
        }

        # Read existing CSV (or create empty)
        if os.path.exists(CSV_FILE):
            df = pd.read_csv(CSV_FILE)
        else:
            df = pd.DataFrame(columns=['filename', 'label', 'timestamp', 'file_path'])

        # Add new row using concat (not append!)
        df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        df.to_csv(CSV_FILE, index=False)

        return jsonify({'message': 'File saved and label logged.'}), 200

    except Exception as e:
        print("Upload error:", str(e))
        return jsonify({'error': 'Upload failed.'}), 500

@app.route('/stats', methods=['GET'])
def stats():
    if not os.path.exists(CSV_FILE):
        return jsonify({})

    df = pd.read_csv(CSV_FILE)
    # Count by label
    counts = df['label'].value_counts().to_dict()
    return jsonify(counts)


@app.route('/download-dataset')
def download_dataset():
    image_folder = 'uploads'
    csv_file = 'labels.csv'
    chunk_size = 10 # optional

    # Read CSV
    if not os.path.exists(csv_file):
        return abort(404, description="CSV not found.")

    df = pd.read_csv(csv_file)
    total_samples = len(df)

    # Get optional chunk number
    chunk_param = request.args.get('chunk', None)
    
    if chunk_param:
        try:
            chunk = int(chunk_param)
        except ValueError:
            return abort(400, description="Invalid chunk number.")
        
        total_chunks = (total_samples + chunk_size - 1) // chunk_size
        if chunk < 1 or chunk > total_chunks:
            return abort(400, description=f"Invalid chunk number. Total chunks: {total_chunks}")
        
        # Get specific slice
        start = (chunk - 1) * chunk_size
        end = min(start + chunk_size, total_samples)
        df_chunk = df.iloc[start:end]
        zip_name = f'lekhoni_dataset_chunk_{chunk}.zip'
    else:
        # Full dataset
        df_chunk = df
        zip_name = 'lekhoni_dataset.zip'

    # Create temporary directory
    with tempfile.TemporaryDirectory() as temp_dir:
        dataset_dir = os.path.join(temp_dir, 'lekhoni_dataset')
        images_dir = os.path.join(dataset_dir, 'images')
        os.makedirs(images_dir, exist_ok=True)

        # Copy only required images
        missing = 0
        for img_name in df_chunk['filename']:
            src = os.path.join(image_folder, img_name)
            dst = os.path.join(images_dir, img_name)
            if os.path.exists(src):
                shutil.copy(src, dst)
            else:
                missing += 1

        # Save filtered CSV
        df_chunk.to_csv(os.path.join(dataset_dir, 'annotations.csv'), index=False)

        # Create ZIP
        zip_path = os.path.join(temp_dir, zip_name)
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, _, files in os.walk(dataset_dir):
                for file in files:
                    abs_path = os.path.join(root, file)
                    rel_path = os.path.relpath(abs_path, dataset_dir)
                    zipf.write(abs_path, rel_path)

        print(f"Delivered: {zip_name}, entries: {len(df_chunk)}, missing images: {missing}")
        return send_file(
            zip_path,
            as_attachment=True,
            download_name=zip_name,
            mimetype='application/zip'
        )

if __name__ == '__main__':
    app.run(port=8000, debug=True)

