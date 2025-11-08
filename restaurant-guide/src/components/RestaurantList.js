import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantList.css';
import { ChevronLeft, Star } from 'lucide-react';
import { communityLists } from '../data/communityLists';

const RestaurantList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the list by ID
  const list = communityLists.find(l => l.id === parseInt(id));

  if (!list) {
    return (
      <div className="restaurant-list">
        <button className="back-button" onClick={() => navigate('/')}>
          <ChevronLeft size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} /> Back to Community
        </button>
        <h2>List not found</h2>
      </div>
    );
  }

  const handleSelectRestaurant = (restaurantId) => {
    navigate(`/list/${id}/details/${restaurantId}`);
  };

  return (
    <div className="restaurant-list">
      <button className="back-button" onClick={() => navigate('/')}>
        <ChevronLeft size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} /> Back to Community
      </button>

      <h2>{list.title}</h2>
      <p className="restaurant-count">{list.restaurants.length} amazing restaurants to explore</p>

      <div className="restaurant-grid">
        {list.restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => handleSelectRestaurant(restaurant.id)}
          >
            <div className="restaurant-header">
              <h3>{restaurant.name}</h3>
              <span className="cuisine-badge">{restaurant.cuisine}</span>
            </div>
            <div className="restaurant-rating">
              <span className="stars">
                {[...Array(Math.floor(restaurant.rating))].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" style={{ display: 'inline-block', marginRight: '2px' }} />
                ))}
              </span>
              <span className="rating-number">{restaurant.rating}</span>
            </div>
            <p className="restaurant-preview">
              {restaurant.review.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
