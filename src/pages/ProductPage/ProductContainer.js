import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from "./ProductItem";
class ProductContainer extends Component {
    state = {
        products: [],
      }
      componentDidMount() {
        axios.get(`http://localhost:3000/products`)
        .then(res => {
          const products = res.data;
          this.setState({ products });
        })
      }
    render() {
        return (
          <div className="main-product">
          <div className="row">
              {/* content */}
          { this.state.products.map(product => 
            <ProductItem
              product={product}
              key={product.id}
             
            />
            )}
          </div>
        </div>
        );
    }
}

export default ProductContainer;