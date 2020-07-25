import React, { Component } from "react";

import SlideProduct from "../HomePage/SlideProduct";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
class ProductDetailPage extends Component {
  render() {
    return (
      <div>
        <section id="infor-product" className="infor-product mt-3">
          <div className="container">
            <div className="row">
              <div className="col col-md-7">
                <div className="easyzoom easyzoom--adjacent easyzoom--with-thumbnails">
                  <a href="img/sanpham/huawei/nova3i/1.jpg">
                    <img
                      src="img/sanpham/huawei/nova3i/1.jpg"
                      style={{ width: "550px", height: "550px" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col col-md-4 info-detail ml-5">
                <h4 className="name-product">Điện Thoại OPPO A3s </h4>
                <h6 className="brand-product">
                  Thương hiệu: <a href="#">OPPO</a>
                </h6>
                <p className="real-price">
                  Giá: <span className="span-real-price ">3.999.000 đ</span>
                </p>
                <p className="percent-price">
                  Tiết kiệm:{" "}
                  <span className="span-percent-price btn btn-warning">
                    15%
                  </span>
                </p>
                <p className="fake-price">
                  Giá chưa giảm :
                  <del className="span-fake-price">6.900.000 đ</del>
                </p>
                <ul className="more-information p-3">
                  <li>Camera Trước: 8 MP (Hỗ trợ công nghệ A.I)</li>
                  <li>Camera Sau: 13 MP + 2 MP (Camera kép)</li>
                  <li>Bộ Nhớ: 32GB</li>
                  <li>RAM: 3GB</li>
                  <li>Màn hình: 6.2 inch (Màn hình siêu tràn), HD+</li>
                  <li>
                    Màu sắc : <i className="fas fa-circle red" />
                  </li>
                </ul>
                <div className="border-dark mb-3 ml-3" style={{ width: "33%" }}>
                  <span className="quanity">Số lượng:</span>
                  <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">-</button>
                        <button type="button" style={{width:80}} className="btn btn">1</button>
                        <button type="button" className="btn btn-primary">+</button>
                  </div>
                </div>
                <div className="row mb-4 ml-1">
                  <div className="float-left btn">
                    <a href="#" className="btn btn-outline-light p-3 ">
                      <i className="fas fa-cart-plus " /> Đặt hàng
                    </a>
                  </div>
                  <div className="float-left btn">
                    <a href="#" className="btn btn-outline-light p-3">
                      <i className="fas fa-heart" /> Yêu Thích
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </section>
        <div className="container">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="home" title="THÔNG TIN CHI TIẾT">
            <div className="container ">
              <div className="row ">
                <div className="col-md-9 ">
                  <table
                    align="left "
                    cellSpacing={0}
                    cellPadding={20}
                    className="table table-bordered "
                  >
                    <thead />
                    <tbody>
                      <tr className="w-100 ">
                        <td className="title w-25 ">Thương hiệu</td>
                        <td className="infor w-75 ">SamSung</td>
                      </tr>
                      <tr>
                        <td className="title ">Tên sản phẩm</td>
                        <td className="infor ">Huawei Nova 3i</td>
                      </tr>
                      <tr>
                        <td className="title ">Màn hình</td>
                        <td className="infor ">6.3 inches, 2340x1080 pixels</td>
                      </tr>
                      <tr>
                        <td className="title ">Hệ điều hành</td>
                        <td className="infor ">Android 8.1</td>
                      </tr>
                      <tr>
                        <td className="title ">Camera sau</td>
                        <td className="infor ">16 MP và 2 MP (2 camera)</td>
                      </tr>
                      <tr>
                        <td className="title ">Camera trước</td>
                        <td className="infor ">Camera kép 24Mp + 2Mp</td>
                      </tr>
                      <tr>
                        <td className="title ">RAM</td>
                        <td className="infor ">4GB</td>
                      </tr>
                      <tr>
                        <td className="title ">ROM</td>
                        <td className="infor ">128GB</td>
                      </tr>
                      <tr>
                        <td className="title ">Dung lượng pin</td>
                        <td className="infor ">334O mAh</td>
                      </tr>
                      <tr>
                        <td className="title ">Bảo hành</td>
                        <td className="infor ">12 tháng</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="REVIEW">
          <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                            <p class="text-secondary text-center">15 Minutes Ago</p>
                        </div>
                        <div class="col-md-10">
                            <p>
                                <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman
                                        Akash</strong></a>
                                <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                <span class="float-right"><i class="text-warning fa fa-star"></i></span>

                            </p>
                            <div class="clearfix"></div>
                            <p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>
                                <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply
                                </a>
                                <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                            </p>
                        </div>
                    </div>
                    <div class="card card-inner">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                    <p class="text-secondary text-center">15 Minutes Ago</p>
                                </div>
                                <div class="col-md-10">
                                    <p><a href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman
                                                Akash</strong></a></p>
                                    <p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <p>
                                        <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply
                                        </a>
                                        <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </Tab>
        </Tabs>
</div>
          <hr />
          <SlideProduct />
       
      </div>
    );
  }
}

export default ProductDetailPage;
