import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/LOGO1.png";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar shadow-lg navbar-expand-lg navbar-light bg-white">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        <img id="logo1_header" alt="peerless vending logo" src={logo1} />
      </Link>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navList" className="navbar-nav ml-auto">
          <li className="nav-item mx-4">
            <Link
              to="/AboutUs"
              className={window.location.pathname === "/AboutUs" ? "nav-link active" : "nav-link"}>
                About Us
              </Link>
          </li>
          <li className="nav-item mx-4">
          <Link
              to="/Services"
              className={window.location.pathname === "/Services" ? "nav-link active" : "nav-link"}>
                Services
              </Link>
          </li>
          <li>
          <Link
              to="/ContactUs"
              className={window.location.pathname === "/ContactUs" ? "nav-link active" : "nav-link"}>
                Contact Us
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
