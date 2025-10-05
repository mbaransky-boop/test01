# 🍽️ Restaurant Rating System

Web application for handling QR codes in restaurants that routes customers differently based on their rating.

## Features

- Interactive 1-10 rating system
- Smart routing based on rating scores
- Contact form with compensation promise for low ratings
- External review platform integration for high ratings
- Mobile-responsive design
- No backend required - works on GitHub Pages

## Quick Start

1. Fork this repository
2. Configure your Google and TripAdvisor review links in `script.js`
3. Update contact information in `contact.html`
4. Enable GitHub Pages in repository settings
5. Generate QR codes pointing to your GitHub Pages URL

## Configuration

Edit the configuration object in `script.js`:

```javascript
const config = {
    googleReviewUrl: 'YOUR_GOOGLE_REVIEW_URL',
    tripadvisorUrl: 'YOUR_TRIPADVISOR_URL',
    minGoodRating: 8
};
```

## How It Works

1. Customer scans QR code → Opens rating page
2. Customer selects rating 1-10
3. Based on rating:
   - **8-10**: Redirects to Google/TripAdvisor review
   - **1-7**: Shows contact form with compensation offer

## Files

- `index.html` - Main rating page
- `contact.html` - Contact form for low ratings
- `styles.css` - All styling
- `script.js` - Main page logic
- `contact.js` - Contact form logic

## License

MIT - Free for commercial use