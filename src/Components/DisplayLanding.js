import React from "react";
import ProductList from "./ProductList";
import { ScrollDownIndicator } from "react-landing-page";

function DisplayLanding() {
  return (
    <div>
      <header className="BackDisplay"></header>
      <ScrollDownIndicator />
      <ProductList />
    </div>
  );
}

export default DisplayLanding;
