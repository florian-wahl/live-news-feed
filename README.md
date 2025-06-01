# News Feed Aggregator

A modern, dark-themed news feed aggregator that combines multiple RSS feeds into a single, easy-to-read interface. Built with vanilla JavaScript, HTML, and CSS.

## Features

- Multiple news source support (NYT, WSJ, The Guardian, NPR, BBC)
- Dark theme for comfortable reading
- Real-time feed updates
- Source toggling
- Responsive design
- No backend required - runs entirely in the browser

## Live Demo

[Add your GitHub Pages URL here once deployed]

## Setup

1. Clone the repository:
```bash
git clone https://github.com/florian-wahl/live-news-feed.git
```

2. Open `index.html` in your browser or serve it using a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000` in your browser

## Usage

- Toggle news sources using the sidebar controls
- Click "Refresh Now" to manually update feeds
- Click on any news title to read the full article
- Feeds automatically refresh every 30 seconds

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

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- RSS feeds provided by respective news organizations
- CORS proxy service for feed access 