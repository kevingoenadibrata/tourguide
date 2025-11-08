import React from 'react';
import './RestaurantList.css';

const RestaurantList = ({ city, restaurants, onSelectRestaurant, onBack }) => {
  return (
    <div className="restaurant-list">
      <button className="back-button" onClick={onBack}>
        ← Back to Cities
      </button>

      <h2>Restaurants in {city}</h2>
      <p className="restaurant-count">{restaurants.length} amazing restaurants to explore</p>

      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => onSelectRestaurant(restaurant)}
          >
            <div className="restaurant-header">
              <h3>{restaurant.name}</h3>
              <span className="cuisine-badge">{restaurant.cuisine}</span>
            </div>
            <div className="restaurant-rating">
              <span className="stars">{'⭐'.repeat(Math.floor(restaurant.rating))}</span>
              <span className="rating-number">{restaurant.rating}</span>
            </div>
            <p className="restaurant-preview">
              {restaurant.review.substring(0, 100)}...
            </p>
            <button className="view-details-btn">View Details →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
