import React from 'react';
import './RestaurantList.css';

const RestaurantList = ({ restaurants, onSelectRestaurant }) => {
  return (
    <div className="restaurant-list">
      <h2>Recommended Restaurants in San Francisco</h2>
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
