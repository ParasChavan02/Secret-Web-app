import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield, LogOut, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Shield className="navbar-icon" />
          <span>Secrets</span>
        </Link>

        <div className="navbar-menu">
          {isAuthenticated ? (
            <div className="navbar-user">
              <div className="user-info">
                <User className="user-icon" />
                <span className="user-name">{user?.name}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                <LogOut className="logout-icon" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="navbar-auth">
              <Link to="/login" className="auth-link">
                Login
              </Link>
              <Link to="/register" className="auth-link register">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 