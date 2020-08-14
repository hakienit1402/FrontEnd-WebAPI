import React, { Component } from "react";
import { Row, Divider } from "antd";
import ProductSlide from "../ProductPage/ProductSlide";
import CartContainer from "./CartContainer";
class CartPage extends Component {

  render() {
    const {product} = this.props;
    console.log(product)
    return (
      <div className="container cartpage">
        <Row className="cart-main">
          <div className="col-lg-8">
            <div className="main-heading">Shopping Cart</div>
            
            <CartContainer/>
            {/* /.table-cart */}
          </div>
          {/* /.col-lg-8 */}
          <div className="col-lg-4">
            <div className="cart-totals">
              <h3>Cart Totals</h3>
              <form action="#" method="get" acceptCharset="utf-8">
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td className="subtotal">$2,589.00</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td className="free-shipping">Free Shipping</td>
                    </tr>
                    <tr className="total-row">
                      <td>Total</td>
                      <td className="price-total">$1,591.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn-cart-totals">
                  <a href="#" className="update round-black-btn" >
                    Continue to Shipping
                  </a>
                  <a href="#" className="checkout round-black-btn" >
                    Proceed to Checkout
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Row>
        <hr/>
        <Divider
          style={{
            color: "red",
            fontSize: 22,
            fontWeight: "bold",
            padding: 20,
            background: "lightgray",
          }}
        >
          ROLATED PRODUCTS
        </Divider>
        <ProductSlide />
      </div>
        
    );
  }
}

export default CartPage;
