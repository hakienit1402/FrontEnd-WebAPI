import React, { Component } from "react";
import ProductItems from "../../components/Product/ProductItems";
import Carousel from "react-bootstrap/Carousel";
class SlideProduct extends Component {
  render() {
    return (
      <div className="container">
        <div
          style={{
            margin: 20,
            backgroundColor: "#ff5500",
            padding: 10,
            color: "white",
          }}
        >
          <h2 align="center">Hot sales</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Carousel>
              <Carousel.Item>
              <div className="row" style={{ marginTop: 25 }}>
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="row" style={{ marginTop: 25 }}>
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="row" style={{ marginTop: 25 }}>
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="row" style={{ marginTop: 25 }}>
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              </div>
              </Carousel.Item>
             
            </Carousel>
           
             
            
          </div>
        </div>
      </div>
    );
  }
}

export default SlideProduct;
