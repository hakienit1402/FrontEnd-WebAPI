import React, { Component } from "react";
import Slide from "./Slide";
import { Divider } from "antd";
import ProductContainer from "../ProductPage/ProductContainer";
//import ProductList from "../ProductPage/ProductList";

class HomePage extends Component {

  render() {
    return (
        <div className="container homepage">
          <Slide />
          <hr />
          <Divider
            style={{
              color: "red",
              fontSize: 22,
              fontWeight: "bold",
              padding: 20,
              background: "lightgray",
            }}
          >
            TOP PRODUCT
          </Divider>
          {/* <ProductList/> */}
          <ProductContainer/>
          <Divider
            style={{
              color: "red",
              fontSize: 22,
              fontWeight: "bold",
              padding: 20,
              background: "lightgray",
            }}
          >
            THƯƠNG HIỆU
          </Divider>
        </div>
     
    );
  }
}

export default HomePage;
