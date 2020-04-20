import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/*}  <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  {title}
                </div>
              </div> */}
              <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12" style={{ margin: "80px" }}>
                  <h2 className="heading-sectionbig col-10 mx-auto my-2 text-center text-title">
                    {title}
                  </h2>
                  <h2 className="heading-sectionsmall col-10 mx-auto my-2 text-center text-title">
                    {title}
                  </h2>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2> model:{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price:<span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
