# Google Analytics Setup Instructions

## Overview
Google Analytics has been integrated into your portfolio website to track user interactions and page views across all pages.

## Setup Steps

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Create a new property for your portfolio website
4. Choose "Web" as the platform
5. Enter your website URL and name

### 2. Get Your Measurement ID
1. In your Google Analytics property, go to "Admin" (gear icon)
2. Under "Property", click on "Data Streams"
3. Click on your web stream
4. Copy your "Measurement ID" (format: G-XXXXXXXXXX)

### 3. Update the Measurement ID
Replace `GA_MEASUREMENT_ID` in the following files with your actual measurement ID:

**File: `public/index.html`**
```html
<!-- Replace GA_MEASUREMENT_ID with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**File: `src/utils/analytics.js`**
```javascript
// Replace GA_MEASUREMENT_ID with your actual ID in the trackPageView function
window.gtag('config', 'G-XXXXXXXXXX', {
  // ... rest of the config
});
```

## What's Being Tracked

### Page Views
- **Home page**: Tracked as "Home"
- **About page**: Tracked as "About" 
- **Contact page**: Tracked as "Contact"
- **Project pages**: Tracked as "Project - [Project Name]"

### User Interactions
- **Category Navigation**: When users switch between categories (Recent, AI, B2B, Web, Mobile, Art)
- **Project Views**: When users click on project cards
- **Image Lightbox**: When users open images in the lightbox modal
- **Contact Interactions**: 
  - Email clicks (coffee mug and direct email)
  - Phone number clicks
  - LinkedIn profile clicks

### Custom Events
- `category_navigation`: Tracks which categories users browse
- `project_view`: Tracks which projects users view
- `image_lightbox_open`: Tracks image interactions
- `contact_interaction`: Tracks contact method usage

## Analytics Dashboard

Once set up, you can view your analytics data in Google Analytics:

1. **Real-time reports**: See current visitors
2. **Audience reports**: Understand your visitors
3. **Acquisition reports**: See how users find your site
4. **Behavior reports**: See which pages are most popular
5. **Custom events**: View the tracked interactions

## Privacy Considerations

- The implementation respects user privacy
- No personal data is collected beyond standard web analytics
- Users can opt out using browser settings or ad blockers
- Consider adding a privacy policy to your website

## Testing

To verify Google Analytics is working:

1. Open your website in a browser
2. Open Developer Tools (F12)
3. Go to the Network tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. Check the Console for any gtag-related messages

## Troubleshooting

- **No data appearing**: Check that your Measurement ID is correct
- **Events not tracking**: Verify the analytics.js file is properly imported
- **Page views not counting**: Ensure the gtag script is loading in the HTML head

## Additional Customization

You can add more tracking by:

1. Importing tracking functions from `src/utils/analytics.js`
2. Adding `trackEvent()` calls to new interactions
3. Creating custom event parameters for more detailed insights

Example:
```javascript
import { trackEvent } from '../utils/analytics';

// Track a custom interaction
trackEvent('button_click', {
  button_name: 'download_resume',
  page_location: 'about'
});
```
