import React, { Component } from "react";
import SlideHome from "./SlideHome";
import BannerHome from "./BannerHome";
import SlideProduct from "./SlideProduct";
import Banner from "./Banner";
class HomePage extends Component {
  render() {
    return (
      <div >
        <SlideHome/>
        <hr/>
        <BannerHome/> 
        <hr/>
        <SlideProduct/>
        <hr/>
        <Banner/>
        <hr/>
        <SlideProduct/>
    </div>
    );
  }
}

export default HomePage;
