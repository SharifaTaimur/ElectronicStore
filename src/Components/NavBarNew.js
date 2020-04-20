import React from "react";
import { Link } from "react-router-dom";

class NavBarNew extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 700;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div className="container">
        <nav
          id="nav"
          className=" fixed-top navbar-expand-md navbar-light bg-faded"
        >
          <input type="checkbox" id="nav" className="hidden" />
          <label htmlFor="nav" className="nav-btn">
            <i></i>
            <i></i>
            <i></i>
          </label>
          <div className="logo">
            <Link to="/">Brand</Link>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">
                  <img
                    src="Images/CartT.png"
                    className="navbar-brand"
                    style={{ height: "50px" }}
                    alt="cart"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBarNew;
