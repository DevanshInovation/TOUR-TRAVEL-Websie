import React from "react";
import { Link } from "react-router-dom";

import Classes from "../Styles/NavBar.module.css";

function NavBar() {
  return (
    <nav className={Classes.Navbar}>
      <div className={Classes.brand}>
        <h1 className={Classes.NavLogo}>
          CDSPL <span>WORLD</span>
        </h1>
      </div>

      <ul>
        <li className={Classes.active}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/places">Places</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
      </ul>

      <button className={Classes.NavBtn}>CONNECT</button>
    </nav>
  );
}

export default NavBar;
