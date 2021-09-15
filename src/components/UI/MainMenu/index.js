import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function MainMenu({ footer }) {
  return (
    <ul
      className={
        footer ? "navbar-nav flex-row position-absolute" : "navbar-nav"
      }
    >
      <li className="nav-item">
        <HashLink
          smooth
          to="/#about"
          className="nav-link m-2 menu-item nav-active"
        >
          About me
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink smooth to="/#portfolio" className="nav-link m-2 menu-item">
          Portfolio
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink smooth to="/#blog" className="nav-link m-2 menu-item">
          Blog
        </HashLink>
      </li>
      <li className="nav-item">
        <HashLink smooth to="/#contact" className="nav-link m-2 menu-item">
          Contact
        </HashLink>
      </li>
    </ul>
  );
}

export default MainMenu;
