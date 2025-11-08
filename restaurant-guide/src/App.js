import React, { useState } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import { restaurants } from './data/restaurants';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleBackToList = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🍴 Restaurant Guide</h1>
        <p>Discover the best dining experiences in your city</p>
      </header>

      <main>
        {selectedRestaurant ? (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onBack={handleBackToList}
          />
        ) : (
          <RestaurantList
            restaurants={restaurants}
            onSelectRestaurant={handleSelectRestaurant}
          />
        )}
      </main>

      <footer className="App-footer">
        <p>Made with ❤️ for food lovers</p>
      </footer>
    </div>
  );
}

export default App;
