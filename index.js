const fs = require('fs');
const path = require('path');

/**
 * Fetches an SVG icon by category and icon name.
 * 
 * @param {string} category - The category of the icon (e.g., 'basic', 'social').
 * @param {string} iconName - The name of the icon without the '.svg' extension.
 * @returns {string|null} - The SVG content as a string, or null if not found.
 */
const getIcon = (category, iconName) => {
  try {
    const iconPath = path.join(__dirname, 'icons', category, `${iconName}.svg`);
    return fs.readFileSync(iconPath, 'utf8');
  } catch (error) {
    console.error(`Icon "${iconName}" not found in category "${category}"`);
    return null;
  }
};

module.exports = {
  getIcon,
};

