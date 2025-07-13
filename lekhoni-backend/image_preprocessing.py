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

#     # Apply binary threshold
#     _, thresh = cv2.threshold(img, 30, 255, cv2.THRESH_BINARY)

#     # Find non-zero (ink) region
#     coords = cv2.findNonZero(thresh)
#     if coords is None:
#         print(f"No ink found in image: {img_path}")
#         return

#     x, y, w, h = cv2.boundingRect(coords)

#     # Crop to content
#     cropped = thresh[y:y+h, x:x+w]

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
