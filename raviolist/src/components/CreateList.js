import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Plus, MapPin } from 'lucide-react';
import './CreateList.css';

function CreateList() {
  const navigate = useNavigate();

  // Form state
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  // Place search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  // Search for places using the API
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(`http://localhost:3000/places/search?query=${encodeURIComponent(searchQuery)}`);

      if (!response.ok) {
        throw new Error('Failed to search places');
      }

      const data = await response.json();
      setSearchResults(data.places || []);
    } catch (error) {
      console.error('Error searching places:', error);
      alert('Failed to search places. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  // Add a place to the selected list
  const handleAddPlace = (place) => {
    // Check if place is already added
    const isAlreadyAdded = selectedPlaces.some(p => p.id === place.id);

    if (isAlreadyAdded) {
      alert('This place is already in your list!');
      return;
    }

    setSelectedPlaces([...selectedPlaces, place]);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Remove a place from the selected list
  const handleRemovePlace = (placeId) => {
    setSelectedPlaces(selectedPlaces.filter(p => p.id !== placeId));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!listName.trim()) {
      alert('Please enter a list name');
      return;
    }

    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }

    if (!location.trim()) {
      alert('Please enter a location');
      return;
    }

    if (selectedPlaces.length === 0) {
      alert('Please add at least one place to your list');
      return;
    }

    // TODO: Save the list (will be implemented later with backend)
    const newList = {
      name: listName,
      description: description,
      location: location,
      places: selectedPlaces,
      creator: localStorage.getItem('raviolist_username'),
      createdAt: new Date().toISOString()
    };

    console.log('New list created:', newList);

    // For now, just show success and navigate to my lists
    alert('List created successfully!');
    navigate('/my-lists');
  };

  return (
    <div className="create-list-container">
      <div className="create-list-header">
        <h1>Create a New List</h1>
        <p>Share your favorite places with the community</p>
      </div>

      <form onSubmit={handleSubmit} className="create-list-form">
        {/* List details section */}
        <div className="form-section">
          <h2>List Details</h2>

          <div className="form-group">
            <label htmlFor="listName">List Name *</label>
            <input
              type="text"
              id="listName"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder="e.g., Best Coffee Shops in Seattle"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Short Description *</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your list in a few sentences..."
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Seattle, USA or Tokyo, Japan"
              required
            />
          </div>
        </div>

        {/* Places section */}
        <div className="form-section">
          <h2>Add Places</h2>

          {/* Search places */}
          <div className="place-search">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-wrapper">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a place..."
                  className="search-input"
                />
              </div>
              <button
                type="submit"
                className="search-button"
                disabled={isSearching}
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>
          </div>

          {/* Search results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              <h3>Search Results</h3>
              <div className="results-list">
                {searchResults.map((place) => (
                  <div key={place.id} className="result-item">
                    <div className="result-info">
                      <h4>{place.displayName?.text || 'Unnamed Place'}</h4>
                      <p className="result-address">
                        <MapPin size={14} />
                        {place.formattedAddress || 'No address available'}
                      </p>
                      {place.rating && (
                        <p className="result-rating">
                          ⭐ {place.rating} ({place.userRatingCount || 0} reviews)
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAddPlace(place)}
                      className="add-place-button"
                    >
                      <Plus size={20} />
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected places */}
          {selectedPlaces.length > 0 && (
            <div className="selected-places">
              <h3>Selected Places ({selectedPlaces.length})</h3>
              <div className="selected-list">
                {selectedPlaces.map((place) => (
                  <div key={place.id} className="selected-item">
                    <div className="selected-info">
                      <h4>{place.displayName?.text || 'Unnamed Place'}</h4>
                      <p className="selected-address">
                        {place.formattedAddress || 'No address available'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemovePlace(place.id)}
                      className="remove-button"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit button */}
        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/my-lists')}
            className="cancel-button"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="submit-button"
          >
            Create List
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateList;
