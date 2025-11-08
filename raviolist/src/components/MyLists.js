import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Community.css';
import { ListOrdered, MapPin, Plus } from 'lucide-react';

const MyLists = () => {
  const navigate = useNavigate();

  // Placeholder data - this would come from user's saved lists
  const myLists = [
    {
      id: 1,
      title: 'My Favorite Spots',
      description: 'Places I love and visit regularly',
      restaurants: [],
      city: 'San Francisco'
    }
  ];

  const handleSelectList = (listId) => {
    navigate(`/list/${listId}`);
  };

  const handleCreateList = () => {
    // TODO: Implement create list functionality
    alert('Create list functionality coming soon!');
  };

  return (
    <div className="community-page">
      <div className="community-header">
        <h2><ListOrdered size={28} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} />My Lists</h2>
        <p className="community-subtitle">Your personal collection of restaurant lists</p>
      </div>

      <button className="create-list-button" onClick={handleCreateList}>
        <Plus size={20} />
        Create New List
      </button>

      <div className="community-lists">
        {myLists.length === 0 ? (
          <div className="empty-state">
            <p>You haven't created any lists yet</p>
            <button className="create-list-button-inline" onClick={handleCreateList}>
              <Plus size={20} />
              Create Your First List
            </button>
          </div>
        ) : (
          myLists.map((list) => (
            <div
              key={list.id}
              className="community-list-card"
              onClick={() => handleSelectList(list.id)}
            >
              <div className="list-header">
                <h3>{list.title}</h3>
              </div>
              <p className="list-description">{list.description}</p>
              <div className="list-footer">
                <div className="list-stat">
                  <ListOrdered size={16} />
                  <span>{list.restaurants.length} restaurants</span>
                </div>
                <div className="list-stat">
                  <MapPin size={16} />
                  <span>{list.city}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyLists;
