import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Classes from "../Styles/NavBar.module.css";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? Classes.active : "");

  const handleInquireClick = () => {
    navigate("/inquire");
    setMenuOpen(false);
  };

  return (
    <nav className={Classes.Navbar}>
      <div className={Classes.brand}>
        <h1 className={Classes.NavLogo}>
          CDSPL <span>WORLD</span>
        </h1>
      </div>

      {/* Hamburger icon (mobile) */}
      <div
        className={Classes.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Menu links */}
      <ul className={`${Classes.navLinks} ${menuOpen ? Classes.open : ""}`}>
        <li className={isActive("/")} onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={isActive("/services")}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/services">Services</Link>
        </li>
        <li className={isActive("/places")} onClick={() => setMenuOpen(false)}>
          <Link to="/places">Places</Link>
        </li>
        <li
          className={isActive("/testimonials")}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <button className={Classes.NavBtn} onClick={handleInquireClick}>
            INQUIRE NOW
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
