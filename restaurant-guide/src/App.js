import React, { useState } from 'react';
import './App.css';
import { Croissant, Heart, Menu, X, User, LogOut } from 'lucide-react';
import CityList from './components/CityList';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Community from './components/Community';
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
  // User authentication state
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleTabSelect = (tab) => {
    setCurrentTab(tab);
    setIsDrawerOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication - accept any username/password
    if (loginUsername.trim()) {
      setUser(loginUsername.trim());
      setShowLogin(false);
      setLoginUsername('');
      setLoginPassword('');
    }
  };

  const handleLogout = () => {
    setUser(null);
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

  // Render the appropriate view based on currentTab and currentView state
  const renderView = () => {
    // If on Community tab, show Community page
    if (currentTab === 'community') {
      return <Community />;
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
              {showLogin ? (
                <form className="login-form" onSubmit={handleLogin}>
                  <input
                    type="text"
                    placeholder="Username"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className="login-input"
                    autoFocus
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="login-input"
                  />
                  <div className="login-actions">
                    <button type="submit" className="submit-button">
                      Login
                    </button>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() => {
                        setShowLogin(false);
                        setLoginUsername('');
                        setLoginPassword('');
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <button className="auth-button login" onClick={() => setShowLogin(true)}>
                    Login
                  </button>
                  <button className="auth-button signup" onClick={() => setShowLogin(true)}>
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <main>{renderView()}</main>

      <footer className="App-footer">
        <p>Made with <Heart size={16} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }} /> for food lovers</p>
      </footer>
    </div>
  );
}

export default App;
