import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../asset/image";
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
            <img
              src={logo}
              width="150"
              height="53"
              className="d-inline-block align-top"
              alt="untuk dunia logo"
            />
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
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/artikel"
              >
                artikel
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/produk"
              >
                Produk
              </NavLink>
              <NavLink className="nav-item nav-link" to="galery">
                Galery
              </NavLink>
              <NavLink
                style={{ display: "none" }}
                className="nav-item nav-link"
                to="login"
              >
                login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
