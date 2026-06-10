import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#ffff" }}
    >
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img src="media/Images/logo.svg" style={{ width: "27%" ,paddingLeft: "50px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/signup">
                   Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/about">
                   About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/product">
                    Products
                </Link>
              </li><li className="nav-item">
                <Link className="nav-link active text-muted" to="/pricing">
                   Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/support">
                    Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
