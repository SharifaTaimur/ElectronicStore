import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class NavBar extends React.Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <Link to="/">
          <img
            src="Images/findertech.png"
            className="navbar-brand"
            style={{ height: "88px" }}
          ></img>
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item ml-5 ">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/*<Link to="/cart" className="ml-auto">
        <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus">My Cart</i>
            </span>
          </ButtonContainer>
        </Link> */}

        <Link to="/cart">
          <img
            src="Images/Cart1.jpg"
            className="navbar-brand"
            style={{ height: "50px" }}
          ></img>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: #f3f3f3;
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    float: right !important;
  }
`;

export default NavBar;
