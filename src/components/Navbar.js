import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo">
      <div className="container">
        <a href="/#" className="brand-logo">
          React Task
        </a>
        <ul className="right">
          <li>
            <Link to="/All">All</Link>
          </li>
          <li>
            <Link to="/Shortlisted">Shortlisted</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
