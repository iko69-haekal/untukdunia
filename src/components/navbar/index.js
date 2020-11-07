import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/tentang"
              >
                Tentang kami
              </NavLink>
              <a className="nav-item nav-link" href="#">
                Artikel
              </a>
              <a className="nav-item nav-link" href="#">
                Produk
              </a>
              <a className="nav-item nav-link" href="#">
                Galery
              </a>
              <a className="nav-item nav-link" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
