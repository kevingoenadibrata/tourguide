import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Community.css';
import { LayoutList, MapPin } from 'lucide-react';
import { communityLists } from '../data/communityLists';

const Community = () => {
  const navigate = useNavigate();

  const handleSelectList = (listId) => {
    navigate(`/list/${listId}`);
  };

  return (
    <div className="community-page">
      <div className="community-header">
        <h2>Community Lists</h2>
        <p className="community-subtitle">Discover curated restaurant collections from fellow food lovers</p>
      </div>

      <div className="community-lists">
        {communityLists.map((list) => (
          <div
            key={list.id}
            className="community-list-card"
            onClick={() => handleSelectList(list.id)}
          >
            <div className="list-header">
              <h3>{list.title}</h3>
              <span className="creator">by {list.creator}</span>
            </div>
            <p className="list-description">{list.description}</p>
            <div className="list-footer">
              <div className="list-stat">
                <LayoutList size={16} />
                <span>{list.restaurants.length} restaurants</span>
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
