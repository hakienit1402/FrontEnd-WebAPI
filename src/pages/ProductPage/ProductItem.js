import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
class ProductItem extends Component {
    state = {
        cartList: [],
    }
    onAddToCart = (product) => {
    //     axios.post(`http://localhost:3000/cart`, { product })
    //     .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })    
        console.log(product)
    }
    render() {
        const {product}= this.props;
        return (
            <div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              
              <div className="product-item">
              
              <div className="pi-img-wrapper">
                       
                <img src={product.image} className="img-responsive" alt="#" />   
                   
              <div>    
               
              </div>
              </div>
              <Link to={"/productdetail/"+ product.id} >
              <h3 style={{marginTop:10}}><p>{product.name}</p></h3>
              </Link> 
              <div className="pi-price">{product.price}</div>
              <p className="btn add2cart" onClick={() => this.onAddToCart(product)}>Add to cart</p>
              
              </div>
           
            </div>
            </div>
        );
    }
}

export default ProductItem;
