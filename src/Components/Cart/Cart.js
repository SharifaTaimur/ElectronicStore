import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends React.Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  {/* <Title name="your" title="cart" /> */}
                  <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12" style={{ margin: "80px" }}>
                      <h2 className="heading-sectionbig col-10 mx-auto my-2 text-center text-title">
                        Your Cart
                      </h2>
                      <h2 className="heading-sectionsmall col-10 mx-auto my-2 text-center text-title">
                        Your Cart
                      </h2>
                    </div>
                  </div>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
