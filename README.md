# Get App - Simple App Download Page

A clean, minimal single-page website featuring an inspirational quote and app download buttons that automatically adapts to the user's system theme (light/dark mode).

## Features

- **System Theme Adaptive**: Automatically switches between light and dark mode based on user's system preferences
- **Centered Design**: Clean, minimal layout with content centered on the page
- **Inspirational Quote**: Features a wise quote without attribution
- **App Store Links**: Three buttons linking to Google Play, Huawei AppGallery, and Apple App Store
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility**: Proper focus states and semantic HTML

## Project Structure

```
24-coins-web-page/
├── index.html          # Main HTML file
├── styles.css          # CSS with system theme detection
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern CSS with system theme detection using `prefers-color-scheme`
- **System Fonts**: Uses native system font stack for optimal performance
- **Responsive Design**: Mobile-first approach with flexible layouts

## Theme Behavior

- **Light Mode**: White background with black text (default)
- **Dark Mode**: Black background with white text (automatically detected)
- **Buttons**: Adapt to theme with appropriate background colors and borders

## App Store Links

The page includes three download buttons:

1. **Google Play Store** - Links to play.google.com/store
2. **Huawei AppGallery** - Links to appgallery.huawei.com  
3. **Apple App Store** - Links to apps.apple.com

## How to Use

1. Open `index.html` in any modern web browser
2. The page will automatically detect your system's theme preference
3. Click any app store button to navigate to the respective store

## Browser Compatibility

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Supports system theme detection in browsers that implement `prefers-color-scheme`

## Customization

To change the quote, edit the blockquote content in `index.html`:

```html
<blockquote class="quote">
    "Your custom quote here"
</blockquote>
```

To update app store URLs, modify the href attributes in the app buttons.

## License

This project is open source and available under the MIT License.
