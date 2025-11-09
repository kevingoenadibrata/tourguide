require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client } = require('@googlemaps/google-maps-services-js');

const app = express();
const PORT = process.env.PORT || 3000;
const googleMapsClient = new Client({});

// Enable CORS for all origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('i love ravioli');
});

// Places search endpoint
app.get('/places/search', async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    if (!process.env.GOOGLE_MAPS_API_KEY) {
      return res.status(500).json({ error: 'Google Maps API key is not configured' });
    }

    const response = await googleMapsClient.textSearch({
      params: {
        query: query,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    res.json({
      status: response.data.status,
      results: response.data.results,
    });
  } catch (error) {
    console.error('Error searching places:', error);
    res.status(500).json({
      error: 'Failed to search places',
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
