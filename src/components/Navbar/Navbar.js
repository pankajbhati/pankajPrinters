// Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
        <div className="navbar-left">
            <span className="company-name1">Pankaj Printers</span>
            <span className="company-name2">& Packaging</span>
        </div>
        <div className="navbar-right">
            <button className="nav-btn">Services</button>
            <button className="nav-btn">Contact</button>
        </div>
    </div>
  </nav>
);

export default Navbar;
