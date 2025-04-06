/**
 * Helper function to get the correct image path
 * This is useful when deploying to production where paths might be different
 * 
 * @param path The image path from data.json
 * @returns The correct image path for the current environment
 */
export const getImagePath = (path: string): string => {
  // If the path is already a URL, return it as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // For local development, return the path as is
  // In production, you might need to adjust this based on your deployment setup
  return path;
};

/**
 * Preload images to improve user experience
 * 
 * @param paths Array of image paths to preload
 */
export const preloadImages = (paths: string[]): void => {
  paths.forEach(path => {
    const img = new Image();
    img.src = getImagePath(path);
  });
};

export default {
  getImagePath,
  preloadImages
};
