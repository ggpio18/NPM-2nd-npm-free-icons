# Free Icons NPM Package

This package provides a collection of free SVG icons that can be easily integrated into your projects. Whether you need icons for basic UI elements or social media, this package has you covered!

# Installation
To install the package, run the following command in your project directory:

bash:
```
npm install free-icons-npm
```

# Usage
You can retrieve icons by category and name using the getIcon method provided by the package. The icon will be returned as an SVG string, which can then be embedded in your HTML, React components, or any frontend framework.

Example in JavaScript
javascrip:
```
// Import the getIcon method from the package
const { getIcon } = require('free-icons-npm');

// Retrieve the "arrow" icon from the "basic" category
const arrowIcon = getIcon('basic', 'arrow');

// Log the SVG content
console.log(arrowIcon);
```

Example in React
For React users, you can embed the SVG icon directly in your JSX:
React:
```
import React from 'react';
import { getIcon } from 'free-icons-npm';

const IconComponent = () => {
  const arrowIcon = getIcon('basic', 'arrow');

  return (
    <div>
      <h2>Arrow Icon</h2>
      <div dangerouslySetInnerHTML={{ __html: arrowIcon }} />
    </div>
  );
};

export default IconComponent;
```

# Available Categories and Icons
Here are the categories and the available icons within each:

Basic
arrow
search
menu
Social
facebook
twitter
instagram

# How to Retrieve Icons
To retrieve an icon, use the getIcon function. It takes two arguments:

- Category - The folder in which the icon resides (e.g., "basic", "social").
- Icon Name - The name of the icon file (without the .svg extension).
For example:
```
const icon = getIcon('social', 'facebook');
```

This will return the SVG string for the Facebook icon.

# Handling Missing Icons
If an icon is not found, the package will return null and log an error message to the console:
javascript
```
const missingIcon = getIcon('basic', 'nonexistent-icon');
// Error logged: "Icon 'nonexistent-icon' not found in category 'basic'"
```

# Contributions
Feel free to contribute to this project! You can submit new icons or improve the existing functionality by creating a pull request.

# License
This package is licensed under the MIT License, allowing for both personal and commercial use. Please ensure that the icons used in this package adhere to any applicable license terms.






