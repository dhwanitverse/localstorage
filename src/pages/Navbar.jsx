import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark mb-4">
    <div className="container d-flex align-items-center">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src={logo}
          alt="Gourmet Delights Logo"
          style={{ height: "auto", width: "150px" }}
        />
      </a>
      <ul className="nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-light">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-light">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create-api" className="nav-link text-light">
            Create API
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dish-api-list" className="nav-link text-light">
            Dish API List
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
