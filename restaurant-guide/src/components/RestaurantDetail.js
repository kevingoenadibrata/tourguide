import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantDetail.css';
import { ChevronLeft, Star, Utensils } from 'lucide-react';
import { communityLists } from '../data/communityLists';

const RestaurantDetail = () => {
  const { listId, restaurantId } = useParams();
  const navigate = useNavigate();

  // Find the list by ID
  const list = communityLists.find(l => l.id === parseInt(listId));

  // Find the restaurant within the list
  const restaurant = list?.restaurants.find(r => r.id === parseInt(restaurantId));

  if (!restaurant) {
    return (
      <div className="restaurant-detail">
        <button className="back-button" onClick={() => navigate(`/list/${listId}`)}>
          <ChevronLeft size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} /> Back to List
        </button>
        <h2>Restaurant not found</h2>
      </div>
    );
  }

  // Use address-based embed (works without API key)
  const addressMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(restaurant.address)}&output=embed`;

  return (
    <div className="restaurant-detail">
      <button className="back-button" onClick={() => navigate(`/list/${listId}`)}>
        <ChevronLeft size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} /> Back to List
      </button>

      <div className="detail-container">
        <div className="detail-header">
          <div>
            <h1>{restaurant.name}</h1>
            <p className="detail-cuisine">{restaurant.cuisine} • {restaurant.city}</p>
            <div className="detail-rating">
              <span className="stars">
                {[...Array(Math.floor(restaurant.rating))].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" style={{ display: 'inline-block', marginRight: '2px' }} />
                ))}
              </span>
              <span className="rating-number">{restaurant.rating}/5</span>
            </div>
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-section">
            <h2>About</h2>
            <p className="review-text">{restaurant.review}</p>
            <p className="address">
              <strong>Address:</strong> {restaurant.address}
            </p>
          </div>

          <div className="detail-section">
            <h2>Location</h2>
            <div className="map-container">
              <iframe
                title={`Map of ${restaurant.name}`}
                src={addressMapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="detail-section">
            <h2>Recommended Menu Items</h2>
            <ul className="menu-list">
              {restaurant.recommendedDishes.map((dish, index) => (
                <li key={index} className="menu-item">
                  <span className="menu-icon"><Utensils size={20} /></span>
                  {dish}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
