import React, { Component } from 'react';

class CheckoutPage extends Component {
    render() {
        return (
            <section >
            <div className="container mt-2">
              <h4>GIỎ HÀNG <small>(x sản phẩm)</small></h4>
              <hr/>
              <div className="row">
                <div className="col-md-8 bg-white">
                  <div className="row border-bottom p-2">
                    <div className="col-2">
                      <img src="img/sanpham/huawei/mate20/2.jpg "  height={100} width={100} />
                    </div>
                    <div className="col-5">
                      <h5>Samsung Galxy S10</h5>
                      <p>Cung cấp bởi <a href="#">DHP Mobile</a></p>
                      <a href>Xóa</a>
                    </div>
                    <div className="col-2">
                      16.890.000
                    </div>
                    <div className="col-3">
                     {/*  */}
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">-</button>
                        <button type="button" style={{width:80}} className="btn btn">1</button>
                        <button type="button" className="btn btn-primary">+</button>
                        </div>

                    </div>
                  </div>
                  <div className="row border-bottom p-2">
                    <div className="col-2">
                      <img src="img/sanpham/huawei/nova3i/2.jpg " height={100} width={100} />
                    </div>
                    <div className="col-5">
                      <h5>Samsung Galxy S10</h5>
                      <p>Cung cấp bởi <a href="#">DHP Mobile</a></p>
                      <a href>Xóa</a>
                    </div>
                    <div className="col-2">
                      16.890.000
                    </div>
                    <div className="col-3">
                     {/*  */}
                     <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">-</button>
                        <button type="button" style={{width:80}} className="btn btn">1</button>
                        <button type="button" className="btn btn-primary">+</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-12 bg-white">
                    <div className="row p-2 border-bottom">
                      <div className="col p-0">
                        <span className="float-left">Đơn hàng (x sản phẩm)</span>
                      </div>
                      
                    </div>
                    <div className="row p-2 border-bottom">
                      <div className="col p-0">
                        <b className="float-left">Samsung Galaxy S10</b>
                      </div>
                      <div className="float-right">
                        <span>15.690.000đ</span>
                      </div>
                    </div>
                    <div className="row p-2 border-bottom">
                      <div className="col p-0">
                        <b className="float-left">Samsung Galaxy S10</b>
                      </div>
                      <div className="float-right">
                        <span>15.690.000đ</span>
                      </div>
                    </div>
                    <div className="row p-2 border-bottom">
                      <div className="col p-0">
                        <span className="float-left">Tạm tính</span>
                      </div>
                      <div className="float-right">
                        <span>31.380.000đ</span>
                      </div>
                    </div>
                    <div className="row p-2 border-bottom">
                      <div className="col p-0">
                        <span className="float-left">Thành tiền</span>
                      </div>
                      <div className="float-right">
                        <h6 className="text-danger"><b>15.690.000đ</b></h6>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn w-100 btn-success"><a className="text-decoration-none text-white" href="step1.html">Tiến hành đặt hàng</a></button>
                </div>
              </div>
            </div>
          </section>
          
        );
    }
}

export default CheckoutPage;
