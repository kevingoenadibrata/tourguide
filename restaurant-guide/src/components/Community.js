import React from 'react';
import './Community.css';
import { Users, ListOrdered, MapPin } from 'lucide-react';

const Community = () => {
  const communityLists = [
    {
      id: 1,
      title: 'Bakmi List',
      creator: 'kevin',
      restaurantCount: 12,
      city: 'Jakarta',
      description: 'Best noodle spots in the city'
    },
    {
      id: 2,
      title: 'Hidden Gem Bandung',
      creator: 'maria',
      restaurantCount: 8,
      city: 'Bandung',
      description: 'Off the beaten path favorites'
    },
    {
      id: 3,
      title: 'Top Tiktok Finds',
      creator: 'mark',
      restaurantCount: 15,
      city: 'San Francisco',
      description: 'Viral food spots worth the hype'
    },
    {
      id: 4,
      title: 'Vegan Paradise',
      creator: 'sarah',
      restaurantCount: 10,
      city: 'New York',
      description: 'Plant-based dining at its finest'
    },
    {
      id: 5,
      title: 'Late Night Eats',
      creator: 'james',
      restaurantCount: 7,
      city: 'Tokyo',
      description: 'Open past midnight and delicious'
    }
  ];

  return (
    <div className="community-page">
      <div className="community-header">
        <h2><Users size={28} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} />Community Lists</h2>
        <p className="community-subtitle">Discover curated restaurant collections from fellow food lovers</p>
      </div>

      <div className="community-lists">
        {communityLists.map((list) => (
          <div key={list.id} className="community-list-card">
            <div className="list-header">
              <h3>{list.title}</h3>
              <span className="creator">by {list.creator}</span>
            </div>
            <p className="list-description">{list.description}</p>
            <div className="list-footer">
              <div className="list-stat">
                <ListOrdered size={16} />
                <span>{list.restaurantCount} restaurants</span>
              </div>
              <div className="list-stat">
                <MapPin size={16} />
                <span>{list.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
