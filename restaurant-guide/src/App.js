import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { Croissant, Heart, Menu, X, User, LogOut } from 'lucide-react';
import Community from './components/Community';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Login from './components/Login';

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    navigate('/');
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
    setIsDrawerOpen(false);
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      {!isLoginPage && (
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

      <main>
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/list/:id" element={<RestaurantList />} />
          <Route path="/list/:listId/details/:restaurantId" element={<RestaurantDetail />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </main>

      {!isLoginPage && (
        <footer className="App-footer">
          <p>Made with <Heart size={16} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }} /> for food lovers</p>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
