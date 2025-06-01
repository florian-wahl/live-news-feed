const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs').promises;
const path = require('path');

const NEWS_SOURCES = {
    nyt: {
        name: "New York Times",
        url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
    },
    wsj: {
        name: "Wall Street Journal",
        url: "https://feeds.content.dowjones.io/public/rss/RSSWorldNews"
    },
    guardian: {
        name: "The Guardian",
        url: "https://www.theguardian.com/world/rss"
    },
    bbc: {
        name: "BBC News",
        url: "https://feeds.bbci.co.uk/news/world/rss.xml"
    },
    npr: {
        name: "NPR",
        url: "https://feeds.npr.org/1004/rss.xml"
    },
    reuters: {
        name: "Reuters",
        url: "https://ir.thomsonreuters.com/rss/news-releases.xml?items=15"
    }
};

async function fetchFeed(sourceId, source) {
    try {
        console.log(`Fetching feed from ${source.name}...`);
        const response = await axios.get(source.url, {
            headers: {
                'Accept': 'application/xml, application/rss+xml, text/xml',
                'Content-Type': 'application/xml'
            }
        });

        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(response.data);

        const items = result.rss.channel[0].item.map(item => ({
            title: item.title[0],
            link: item.link[0],
            pubDate: item.pubDate[0],
            description: item.description[0],
            source: source.name,
            date: new Date(item.pubDate[0]).toISOString()
        }));

        return items;
    } catch (error) {
        console.error(`Error fetching ${source.name} feed:`, error.message);
        return [];
    }
}

async function main() {
    try {
        // Create feeds directory if it doesn't exist
        const feedsDir = path.join(process.cwd(), 'feeds');
        await fs.mkdir(feedsDir, { recursive: true });

        // Fetch all feeds
        const allFeeds = await Promise.all(
            Object.entries(NEWS_SOURCES).map(([id, source]) => fetchFeed(id, source))
        );

        // Combine and sort all items
        const allItems = allFeeds.flat().sort((a, b) =>
            new Date(b.pubDate) - new Date(a.pubDate)
        );

        // Save to JSON file
        await fs.writeFile(
            path.join(feedsDir, 'news.json'),
            JSON.stringify({ items: allItems, lastUpdated: new Date().toISOString() }, null, 2)
        );

        console.log('Successfully updated feeds');
    } catch (error) {
        console.error('Error in main process:', error);
        process.exit(1);
    }
}

main(); 