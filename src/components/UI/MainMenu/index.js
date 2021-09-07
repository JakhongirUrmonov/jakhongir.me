import React from "react";

function MainMenu({ footer }) {
  return (
    <div>
      <ul
        className={
          footer ? "navbar-nav flex-row position-absolute" : "navbar-nav"
        }
      >
        <li className="nav-item">
          <a href="/#about" className="nav-link m-2 menu-item nav-active">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href="/#portfolio" className="nav-link m-2 menu-item">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="/#blog" className="nav-link m-2 menu-item">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="/#contact" className="nav-link m-2 menu-item">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MainMenu;
