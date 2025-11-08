import React, { useState } from 'react';
import './App.css';
import { Utensils, Heart } from 'lucide-react';
import CityList from './components/CityList';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import { getRestaurantsByCity } from './data/restaurants';

function App() {
  // Navigation state: 'cities', 'restaurants', or 'detail'
  const [currentView, setCurrentView] = useState('cities');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
    setCurrentView('restaurants');
  };

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentView('detail');
  };

  const handleBackToCities = () => {
    setSelectedCity(null);
    setSelectedRestaurant(null);
    setCurrentView('cities');
  };

  const handleBackToRestaurants = () => {
    setSelectedRestaurant(null);
    setCurrentView('restaurants');
  };

  // Render the appropriate view based on currentView state
  const renderView = () => {
    switch (currentView) {
      case 'cities':
        return <CityList onSelectCity={handleSelectCity} />;

      case 'restaurants':
        return (
          <RestaurantList
            city={selectedCity}
            restaurants={getRestaurantsByCity(selectedCity)}
            onSelectRestaurant={handleSelectRestaurant}
            onBack={handleBackToCities}
          />
        );

      case 'detail':
        return (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onBack={handleBackToRestaurants}
          />
        );

      default:
        return <CityList onSelectCity={handleSelectCity} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><Utensils size={40} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} /> Restaurant Guide</h1>
        <p>Discover the best dining experiences around the world</p>
      </header>

      <main>{renderView()}</main>

      <footer className="App-footer">
        <p>Made with <Heart size={16} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }} /> for food lovers</p>
      </footer>
    </div>
  );
}

export default App;
