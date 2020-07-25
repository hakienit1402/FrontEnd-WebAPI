import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
class SlideHome extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide/1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide/2.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide/3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default SlideHome;
