/**
 * Helper function to get the correct image path
 * This is useful when deploying to production where paths might be different
 *
 * @param path The image path from data.json
 * @returns The correct image path for the current environment
 */
export const getImagePath = (path: string): string => {
  // If the path is already a URL, return it as is
  if (path.startsWith("http")) {
    return path;
  }

  // If the path is from the public folder (starts with '/images/'), return it as is
  if (path.startsWith("/images/")) {
    return path;
  }

  // For other paths, assume they're in the public folder
  return `/images/${path.replace(/^\/+/, "")}`;
};

/**
 * Preload images to improve user experience
 *
 * @param paths Array of image paths to preload
 */
export const preloadImages = (paths: string[]): void => {
  paths.forEach((path) => {
    const img = new Image();
    img.src = getImagePath(path);
  });
};

export default {
  getImagePath,
  preloadImages,
};
