import React from 'react';
import './CityList.css';
import { getCityStats } from '../data/restaurants';

const CityList = ({ onSelectCity }) => {
  const cities = getCityStats();

  // City emoji mapping
  const cityEmojis = {
    'San Francisco': '🌉',
    'New York': '🗽',
    'Tokyo': '🗼',
    'Paris': '🗼'
  };

  return (
    <div className="city-list">
      <h2>Explore Cities</h2>
      <p className="city-list-subtitle">Select a city to discover amazing restaurants</p>

      <div className="city-grid">
        {cities.map((city) => (
          <div
            key={city.name}
            className="city-card"
            onClick={() => onSelectCity(city.name)}
          >
            <div className="city-icon">
              {cityEmojis[city.name] || '🌆'}
            </div>
            <h3>{city.name}</h3>
            <div className="city-stats">
              <div className="stat">
                <span className="stat-value">{city.restaurantCount}</span>
                <span className="stat-label">Restaurants</span>
              </div>
              <div className="stat">
                <span className="stat-value">{city.avgRating}</span>
                <span className="stat-label">Avg Rating</span>
              </div>
            </div>
            <div className="city-cuisines">
              {city.cuisines.map((cuisine, index) => (
                <span key={index} className="cuisine-tag">
                  {cuisine}
                </span>
              ))}
            </div>
            <button className="explore-city-btn">Explore {city.name} →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
