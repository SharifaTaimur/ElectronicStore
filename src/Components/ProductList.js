import React from "react";
import Product from "./Product";
import Title from "./Title";

import { ProductConsumer } from "../context";

class ProductList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            {/* <Title name="Our" title="Products" /> */}
            <div className="row justify-content-center mb-3 pb-3">
              <div className="col-md-12" style={{ margin: "80px" }}>
                <h2 className="heading-sectionbig col-10 mx-auto my-2 text-center text-title">
                  Our Products
                </h2>
                <h2 className="heading-sectionsmall col-10 mx-auto my-2 text-center text-title">
                  Our Products
                </h2>
              </div>
            </div>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((v, index) => {
                    return <Product product={v} key={v.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
