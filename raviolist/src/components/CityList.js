import React from 'react';
import './CityList.css';
import { Building2, Landmark, MapPin, Utensils, Star } from 'lucide-react';
import { getCityStats } from '../data/restaurants';

const CityList = ({ onSelectCity }) => {
  const cities = getCityStats();

  // City icon mapping
  const cityIcons = {
    'San Francisco': <Building2 size={32} />,
    'New York': <Landmark size={32} />,
    'Tokyo': <Building2 size={32} />,
    'Paris': <Landmark size={32} />
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
            <div className="city-header">
              <div className="city-icon">
                {cityIcons[city.name] || <MapPin size={32} />}
              </div>
              <h3>{city.name}</h3>
            </div>
            <div className="city-stats">
              <div className="stat">
                <span className="stat-value">{city.restaurantCount}</span>
                <Utensils size={16} />
              </div>
              <div className="stat">
                <span className="stat-value">{city.avgRating}</span>
                <Star size={16} />
              </div>
            </div>
            <div className="city-cuisines">
              {city.cuisines.map((cuisine, index) => (
                <span key={index} className="cuisine-tag">
                  {cuisine}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
