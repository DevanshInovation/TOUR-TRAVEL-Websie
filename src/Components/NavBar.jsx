import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Classes from "../Styles/NavBar.module.css";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to set active class based on current path
  const isActive = (path) => (location.pathname === path ? Classes.active : "");

  const handleInquireClick = () => {
    navigate("/inquire");
  };

  return (
    <nav className={Classes.Navbar}>
      <div className={Classes.brand}>
        <h1 className={Classes.NavLogo}>
          CDSPL <span>WORLD</span>
        </h1>
      </div>

      <ul>
        <li className={isActive("/")}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive("/services")}>
          <Link to="/services">Services</Link>
        </li>
        <li className={isActive("/places")}>
          <Link to="/places">Places</Link>
        </li>
        <li className={isActive("/testimonials")}>
          <Link to="/testimonials">Testimonials</Link>
        </li>
      </ul>

      <button className={Classes.NavBtn} onClick={handleInquireClick}>
        INQUIRE NOW
      </button>
    </nav>
  );
}

export default NavBar;
