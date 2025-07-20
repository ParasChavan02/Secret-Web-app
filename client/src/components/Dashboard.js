import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Shield, User, Mail, Calendar, Clock, Lock } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card fade-in">
        <div className="dashboard-header">
          <div className="header-icon">
            <Shield className="dashboard-icon" />
          </div>
          <h1>Welcome to Your Secure Dashboard</h1>
          <p>Your secrets are protected with enterprise-grade security</p>
        </div>

        <div className="user-info">
          <h3>Account Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">
                <User className="info-icon" />
                Full Name
              </div>
              <div className="info-value">{user?.name}</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">
                <Mail className="info-icon" />
                Email Address
              </div>
              <div className="info-value">{user?.email}</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">
                <Calendar className="info-icon" />
                Account Created
              </div>
              <div className="info-value">{formatDate(user?.createdAt)}</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">
                <Clock className="info-icon" />
                Current Time
              </div>
              <div className="info-value">{formatTime(currentTime)}</div>
            </div>
          </div>
        </div>

        <div className="security-status">
          <h3>Security Status</h3>
          <div className="security-grid">
            <div className="security-item">
              <div className="security-icon">
                <Lock className="lock-icon" />
              </div>
              <div className="security-content">
                <h4>Authentication</h4>
                <p>JWT token-based authentication active</p>
                <span className="status-badge active">Secure</span>
              </div>
            </div>
            
            <div className="security-item">
              <div className="security-icon">
                <Shield className="shield-icon" />
              </div>
              <div className="security-content">
                <h4>Session Management</h4>
                <p>HttpOnly cookies with secure flags</p>
                <span className="status-badge active">Protected</span>
              </div>
            </div>
            
            <div className="security-item">
              <div className="security-icon">
                <User className="user-icon" />
              </div>
              <div className="security-content">
                <h4>User Session</h4>
                <p>Active session with encrypted tokens</p>
                <span className="status-badge active">Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-footer">
          <p className="footer-text">
            <Lock className="footer-icon" />
            Your data is encrypted and protected with industry-standard security measures
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 