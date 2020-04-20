import React from "react";

function EmptyCart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title emptyCart">
          <h1>Your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
