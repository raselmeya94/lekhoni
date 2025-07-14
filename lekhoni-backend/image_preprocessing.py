# import cv2
# import numpy as np
# import os

# def preprocess_image(img_path, output_path, final_size=(64, 64)):
#     """
#     Preprocess an image:
#     - Read and invert (white bg, black ink)
#     - Threshold to binarize
#     - Crop tight around ink
#     - Pad to square
#     - Resize to final_size (e.g. 28x28 or 64x64)
#     - Save processed image
#     """
#     # Load as grayscale
#     img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
#     if img is None:
#         print(f"Error: Unable to read image {img_path}")
#         return

#     # Invert image (white bg, black ink)
#     img = 255 - img

#     # # Apply binary threshold
#     # _, thresh = cv2.threshold(img, 30, 255, cv2.THRESH_BINARY)

#     # Find non-zero (ink) region
#     coords = cv2.findNonZero(img)
#     if coords is None:
#         print(f"No ink found in image: {img_path}")
#         return

#     x, y, w, h = cv2.boundingRect(coords)

#     # Crop to content
#     cropped = img[y:y+h, x:x+w]

#     # Make square by padding
#     side = max(w, h)
#     square = np.ones((side, side), dtype=np.uint8) * 255  # white background
#     dx = (side - w) // 2
#     dy = (side - h) // 2
#     square[dy:dy+h, dx:dx+w] = cropped

#     # Resize to desired shape
#     resized = cv2.resize(square, final_size, interpolation=cv2.INTER_AREA)

#     # Save the final processed image
#     cv2.imwrite(output_path, 255 - resized)  # invert back (black ink on white)

#     print(f"Processed image saved to: {output_path}")
import os
import cv2
import numpy as np

def preprocess_image(img_path, output_path, final_size=(64, 64)):
    """
    Preprocess an image:
    - Read grayscale
    - Threshold to binarize (if needed)
    - Crop tight around black text
    - Pad to square with white background
    - Resize to final_size
    - Save processed image
    """

    # Load as grayscale
    img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        print(f"Error: Unable to read image {img_path}")
        return

    # Threshold: Ensure clean black text on white background
    _, img_bin = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY)

    # Invert temporarily to find black pixels (as white for findNonZero)
    img_inv = 255 - img_bin

    # Find bounding box of black content
    coords = cv2.findNonZero(img_inv)
    if coords is None:
        print(f"No text found in image: {img_path}")
        return

    x, y, w, h = cv2.boundingRect(coords)

    # Crop to content
    cropped = img_bin[y:y+h, x:x+w]

    # Pad to square
    side = max(w, h)
    square = np.ones((side, side), dtype=np.uint8) * 255  # white background
    dx = (side - w) // 2
    dy = (side - h) // 2
    square[dy:dy+h, dx:dx+w] = cropped

    # Resize to desired shape
    resized = cv2.resize(square, final_size, interpolation=cv2.INTER_AREA)

    # Save final image (white bg, black text)
    cv2.imwrite(output_path, resized)

    print(f"✅ Processed image saved to: {output_path}")
