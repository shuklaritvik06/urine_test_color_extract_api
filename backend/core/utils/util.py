from PIL import Image
import numpy as np
from sklearn.cluster import KMeans


def extract_colors(file_path: str):
    image = Image.open(file_path)
    image_array = np.array(image)
    num_pixels = image_array.shape[0] * image_array.shape[1]
    image_array_reshaped = image_array.reshape(num_pixels, -1)
    num_colors = 10
    kmeans = KMeans(n_clusters=num_colors)
    kmeans.fit(image_array_reshaped)
    colors = kmeans.cluster_centers_
    colors = colors.astype(int)
    result = []
    for color in colors:
        result.append(color.tolist())
    return result
