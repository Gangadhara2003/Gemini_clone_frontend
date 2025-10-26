import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import './Settings.css';
import { assets } from '../../assets/assets';

const Settings = ({ isMobile, setShowSidebar }) => {
  const { userInfo, updateUser } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.username);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/profile`,
        { username: name, email },
        config
      );

      updateUser(data);
      setMessage('Profile updated successfully');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/change-password`,
        { currentPassword, newPassword },
        config
      );

      setMessage(data.message);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="main">
      <div className="nav">
        {isMobile && (
          <img
            onClick={() => setShowSidebar((prev) => !prev)}
            className="hamburger-menu"
            src={assets.menu_icon}
            alt="Menu"
          />
        )}
        <p className="gemini-clone">
          <img src={assets.gemini_icon} alt="Gemini Icon" />
          Settings
        </p>
        <img
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/gangadhara-k-s-563142286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "_blank"
            )
          }
          src={assets.user_icon}
          alt=""
        />
      </div>
      <div className="settings">
        {message && <div className="settings-message">{message}</div>}
        {error && <div className="settings-error">{error}</div>}
        <div className="settings-content">
          <div className="settings-section">
            <h3>Profile</h3>
            <form onSubmit={handleUpdateProfile}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit">Update Profile</button>
            </form>
          </div>
          <div className="settings-section">
            <h3>Change Password</h3>
            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label htmlFor="current-password">Current Password</label>
                <input
                  type="password"
                  id="current-password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm New Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;