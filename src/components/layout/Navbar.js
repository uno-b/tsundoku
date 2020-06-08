import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            Tsundoku
          </Link>
          <a
            href="#!"
            className="sidenav-trigger hide-on-med-and-up"
            data-target="mobile-menu"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-small-only">
            <SignedOutLinks />
          </ul>

          <ul className="sidenav" id="mobile-menu">
            <SignedOutLinks />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

/*
Mobile links are not downward
*/
