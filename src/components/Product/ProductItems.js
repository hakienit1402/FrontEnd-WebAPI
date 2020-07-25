import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItems extends Component {
    render() {
        return (
            <div className="col-md-3 border-dark zoom">
            <div className="product-grid4">
              <div className="product-image4">
                <Link to="/productdetail">
                  <img
                    className="pic-1 img-fluid"
                    src="img/sanpham/huawei/nova3i/1.jpg"
                  />
                </Link>
                <ul className="social">
                  <li>
                    <button href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart mt-2" />
                    </button>
                  </li>
                </ul>
                <span className="product-status-label">New</span>
                <span className="product-discount-label bg-warning">
                  -10%
                </span>
              </div>
              <div className="product-content">
                <h3 className="title">
                  NOVA3I
                </h3>
                <div className="price">$14.40</div>
              
              </div>
            </div>
          </div>
        );
    }
}

export default ProductItems;