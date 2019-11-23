import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <b className="navbar-brand" href="#">Smile Lab</b>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/patients" className="nav-link">Patients</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/doctors" className="nav-link">Doctors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/parameters" className="nav-link">Parameters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/laboratory" className="nav-link">Laboratory</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Menu;