# Live News Feed

A modern, responsive news feed aggregator that displays headlines from multiple sources in real-time. Built with vanilla JavaScript and Material Design 3.

## Features

- Real-time news updates from multiple sources
- Material Design 3 dark theme
- Responsive layout for all devices
- Source toggles to filter news
- Automatic refresh with rate limiting
- Error handling and retry logic

## News Sources

- New York Times
- Wall Street Journal
- The Guardian
- BBC News
- NPR
- Reuters

## Usage

Simply open `index.html` in a modern web browser. The feed will automatically start fetching and displaying news items.

### Controls

- Use the source toggles in the sidebar to filter news by source
- Click "Refresh Now" to manually update the feed
- The feed automatically refreshes every 30 seconds

## Technical Details

- Built with vanilla JavaScript (no frameworks)
- Uses Material Design 3 for styling
- Implements rate limiting and exponential backoff for API requests
- Handles CORS through a proxy service
- Responsive design with mobile-first approach

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Fetch API

## License

MIT License - see LICENSE file for details

## Project Structure

```
live-news-feed/
├── index.html          # Main application file
├── README.md          # Project documentation
└── .gitignore         # Git ignore file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- RSS feeds provided by respective news organizations
- CORS proxy service for feed access 