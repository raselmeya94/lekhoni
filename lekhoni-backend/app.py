import os
from flask import Flask, jsonify, send_file,request, abort
from flask_cors import CORS
import pandas as pd
from datetime import datetime
# from  image_preprocessing import preprocess_image
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



# @app.route('/download-dataset')
# def download_dataset():
#     image_folder = 'uploads'
#     csv_file = 'labels.csv'
#     chunk_size = 2

#     if not os.path.exists(csv_file):
#         return abort(404, description="CSV file not found.")

#     df = pd.read_csv(csv_file)
#     total_samples = len(df)
#     total_chunks = (total_samples + chunk_size - 1) // chunk_size

#     try:
#         chunk_number = int(request.args.get('chunk', 1))
#     except (TypeError, ValueError):
#         return abort(400, description="Invalid chunk number.")

#     if chunk_number < 1 or chunk_number > total_chunks:
#         return abort(404, description="Chunk number out of range.")

#     start = (chunk_number - 1) * chunk_size
#     end = min(start + chunk_size, total_samples)
#     df_chunk = df.iloc[start:end]

#     with tempfile.TemporaryDirectory() as temp_dir:
#         chunk_dir = os.path.join(temp_dir, f'chunk_{chunk_number}')
#         os.makedirs(chunk_dir, exist_ok=True)

#         images_dir = os.path.join(chunk_dir, 'images')
#         os.makedirs(images_dir, exist_ok=True)

#         missing = 0
#         for _, row in df_chunk.iterrows():
#             img_rel_path = row['file_path']
#             img_name = row['filename']

#             src = img_rel_path
#             dst = os.path.join(images_dir, img_name)

#             if os.path.exists(src):
#                 shutil.copy(src, dst)
#             else:
#                 missing += 1

#         df_chunk.to_csv(os.path.join(chunk_dir, 'annotations.csv'), index=False)

#         zip_path = os.path.join(temp_dir, f'dataset_{chunk_number}.zip')
#         with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
#             for root, _, files in os.walk(chunk_dir):
#                 for file in files:
#                     abs_path = os.path.join(root, file)
#                     rel_path = os.path.relpath(abs_path, chunk_dir)
#                     zipf.write(abs_path, rel_path)

#         print(f"Chunk {chunk_number}: {end - start} samples, missing: {missing}")

#         return send_file(
#             zip_path,
#             as_attachment=True,
#             download_name=f'lekhoni_dataset{chunk_number}.zip',
#             mimetype='application/zip'
#         )

if __name__ == '__main__':
    app.run(port=8000, debug=True)

