import React, { Component } from "react";
import ProductItems from "../../components/Product/ProductItems";
import Banner from "../HomePage/Banner";
import SlideProduct from "../HomePage/SlideProduct";

class ProductPage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="container">
          <hr />
          
          <hr />
          <div className=" row col-md-12">
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            
          </div>
          <hr/>
          <SlideProduct/>
        </div>
      </div>
    );
  }
}

export default ProductPage;
