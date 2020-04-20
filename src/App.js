import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details";
import ProductList from "./Components/ProductList";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import LandingPage from "./Components/LandingPage";
import NavBarNew from "./Components/NavBarNew";
import DisplayLanding from "./Components/DisplayLanding";

function App() {
  return (
    <React.Fragment>
      {/*  <NavBar />*/}
      <NavBarNew />
      <Switch>
        <Route exact path="/" component={DisplayLanding} />
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route path="/products" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>

      <Modal />
    </React.Fragment>
  );
}

export default App;
