# Restaurant Guide App

A React-based restaurant recommendation app that displays a curated list of restaurants in San Francisco with detailed information, reviews, Google Maps integration, and recommended menu items.

## Features

- **Restaurant List View**: Browse through recommended restaurants with ratings and preview information
- **Detailed Restaurant View**: Click on any restaurant to see:
  - Full review and description
  - Restaurant address
  - Interactive Google Maps embed
  - List of recommended menu items
- **Responsive Design**: Works on desktop and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd raviolist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
raviolist/
├── src/
│   ├── components/
│   │   ├── RestaurantList.js      # Restaurant grid/list component
│   │   ├── RestaurantList.css     # List styling
│   │   ├── RestaurantDetail.js    # Detailed view component
│   │   └── RestaurantDetail.css   # Detail view styling
│   ├── data/
│   │   └── restaurants.js         # Restaurant data
│   ├── App.js                     # Main app component
│   ├── App.css                    # App styling
│   └── index.js                   # Entry point
└── public/
    └── index.html
```

## Customization

### Adding More Restaurants

Edit `src/data/restaurants.js` and add new restaurant objects with the following structure:

```javascript
{
  id: 7,
  name: "Restaurant Name",
  city: "City Name",
  cuisine: "Cuisine Type",
  address: "Full Address",
  coordinates: "lat,lng",
  rating: 4.5,
  review: "Detailed review text...",
  recommendedDishes: [
    "Dish 1",
    "Dish 2",
    "Dish 3"
  ]
}
```

### Changing the City

Update the restaurant data in `src/data/restaurants.js` and the header text in `src/components/RestaurantList.js`

## Technologies Used

- React
- Create React App
- CSS3 with Flexbox and Grid
- Google Maps Embed API

## License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is available for educational purposes.
