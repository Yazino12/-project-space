import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo/planet.png';

const activeStyle = {
  color: 'var(--text-color)',
  textDecoration: 'underline',
};

const Header = () => (
  <nav>
    <div className="logo-section">
      <img src={logo} alt="logo-img" className="logo" />
      <h1 className="header">Space Travellers Hub</h1>
    </div>
    <div className="links">
      <NavLink
        to="/"
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/missions"
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Missions
      </NavLink>
      <NavLink
        to="/profile"
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        My Profile
      </NavLink>
    </div>
  </nav>
);

export default Header;
