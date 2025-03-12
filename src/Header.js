import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "./Header.css";

const Header =()  => {
  const navigate = useNavigate(); // Initialize navigate hook

  return (
    <header className="header">
      <div className="header-logo">
        <h1>Zoe</h1>
      </div>
      <div className="header-user">
      <i className="fa-regular fa-circle-user profile-icon"></i>
        <div className="user-info">
          <p className="user-name">Chris Matsetse</p>
          <p className="user-role">Full-stack Developer</p>
          <button className="logout-button"  onClick={() => navigate('/sign-in')}>
          <i className="fa-solid fa-arrow-right-from-bracket logout-icon"></i> Log out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
