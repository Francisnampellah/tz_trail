import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="default-header HeaderTitle">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white lnr lnr-menu"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <a href="./Pages-inside/blog.html">Blogs</a>
              </li>
              <li>
                <a href="#portfolio">Places</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="./Pages-inside/About.html">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
