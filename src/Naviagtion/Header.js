import React from "react";
import "./header.css";
import Logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header className="default-header HeaderTitle">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} style={{ width: "125px" }} alt="" />
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
            className="navbar-collapse justify-content-end align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <a href="/ourtour">Our tour</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/volunteer">Volunteer</a>
              </li>
              <li>
                <a href="/homestay">HomeStay</a>
              </li>
              {/* <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="./Pages-inside/About.html">About Us</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
