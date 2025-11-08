import React, { useState } from 'react';
import './App.css';
import { Croissant, Heart, Menu, X, User, LogOut } from 'lucide-react';
import CityList from './components/CityList';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Community from './components/Community';
import Login from './components/Login';
import { getRestaurantsByCity } from './data/restaurants';

function App() {
  // Tab state: 'recommendations' or 'community'
  const [currentTab, setCurrentTab] = useState('recommendations');
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Navigation state: 'cities', 'restaurants', or 'detail'
  const [currentView, setCurrentView] = useState('cities');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  // Community list state
  const [selectedCommunityList, setSelectedCommunityList] = useState(null);
  // User authentication state
  const [user, setUser] = useState(null);
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleTabSelect = (tab) => {
    setCurrentTab(tab);
    setIsDrawerOpen(false);
  };

  const handleLogin = (username) => {
    // Mock authentication - accept any username
    setUser(username);
    setShowLoginPage(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleNavigateToLogin = () => {
    setShowLoginPage(true);
    setIsDrawerOpen(false);
  };

  const handleBackFromLogin = () => {
    setShowLoginPage(false);
  };

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
    setCurrentView('restaurants');
  };

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentView('detail');
  };

  const handleBackToCities = () => {
    setSelectedCity(null);
    setSelectedRestaurant(null);
    setCurrentView('cities');
  };

  const handleBackToRestaurants = () => {
    setSelectedRestaurant(null);
    setCurrentView('restaurants');
  };

  const handleSelectCommunityList = (list) => {
    setSelectedCommunityList(list);
  };

  const handleBackToCommunity = () => {
    setSelectedCommunityList(null);
    setSelectedRestaurant(null);
  };

  // Render the appropriate view based on currentTab and currentView state
  const renderView = () => {
    // If on Login page, show Login
    if (showLoginPage) {
      return <Login onLogin={handleLogin} onBack={handleBackFromLogin} />;
    }

    // If on Community tab
    if (currentTab === 'community') {
      // Show restaurant detail if a restaurant is selected from a community list
      if (selectedRestaurant) {
        return (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onBack={handleBackToCommunity}
          />
        );
      }

      // Show community list restaurants if a list is selected
      if (selectedCommunityList) {
        return (
          <RestaurantList
            city={selectedCommunityList.title}
            restaurants={selectedCommunityList.restaurants}
            onSelectRestaurant={handleSelectRestaurant}
            onBack={handleBackToCommunity}
          />
        );
      }

      // Show Community page by default
      return <Community onSelectList={handleSelectCommunityList} />;
    }

    // Otherwise show Recommendations flow (cities -> restaurants -> detail)
    switch (currentView) {
      case 'cities':
        return <CityList onSelectCity={handleSelectCity} />;

      case 'restaurants':
        return (
          <RestaurantList
            city={selectedCity}
            restaurants={getRestaurantsByCity(selectedCity)}
            onSelectRestaurant={handleSelectRestaurant}
            onBack={handleBackToCities}
          />
        );

      case 'detail':
        return (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onBack={handleBackToRestaurants}
          />
        );

      default:
        return <CityList onSelectCity={handleSelectCity} />;
    }
  };

  return (
    <div className="App">
      {!showLoginPage && (
        <>
          <header className="App-header">
            <div className="header-content">
              <h1><Croissant size={28} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} /> tourguideman</h1>
              <button className="menu-button" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <Menu size={24} />
              </button>
            </div>
          </header>

          {/* Drawer overlay */}
          {isDrawerOpen && (
            <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)} />
          )}

          {/* Drawer */}
          <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
            <div className="drawer-header">
              <h2>Menu</h2>
              <button className="close-button" onClick={() => setIsDrawerOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="drawer-content">
              <button
                className={`drawer-tab ${currentTab === 'recommendations' ? 'active' : ''}`}
                onClick={() => handleTabSelect('recommendations')}
              >
                Recommendations
              </button>
              <button
                className={`drawer-tab ${currentTab === 'community' ? 'active' : ''}`}
                onClick={() => handleTabSelect('community')}
              >
                Community
              </button>
            </div>

            {/* Login/User section */}
            <div className="drawer-auth">
              {user ? (
                // Logged in state
                <div className="user-profile">
                  <div className="user-info">
                    <User size={20} />
                    <span className="username">{user}</span>
                  </div>
                  <button className="logout-button" onClick={handleLogout}>
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              ) : (
                // Not logged in state
                <div className="auth-buttons">
                  <button className="auth-button login" onClick={handleNavigateToLogin}>
                    Login
                  </button>
                  <button className="auth-button signup" onClick={handleNavigateToLogin}>
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <main>{renderView()}</main>

      {!showLoginPage && (
        <footer className="App-footer">
          <p>Made with <Heart size={16} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }} /> for food lovers</p>
        </footer>
      )}
    </div>
  );
}

export default App;
