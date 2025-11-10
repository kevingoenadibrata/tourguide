require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

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

    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.id'
      },
      body: JSON.stringify({
        textQuery: query
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Places API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();

    res.json({
      places: data.places || []
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
