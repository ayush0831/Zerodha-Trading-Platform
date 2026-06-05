import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#ffff" }}
    >
      <div class="container ">
        <Link class="navbar-brand" to="/">
          <img src="media/Images/logo.svg" style={{ width: "27%" ,paddingLeft: "50px" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to="/signup">
                   Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/about">
                   About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/product">
                    Products
                </Link>
              </li><li class="nav-item">
                <Link class="nav-link active text-muted" to="/pricing">
                   Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/support">
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
