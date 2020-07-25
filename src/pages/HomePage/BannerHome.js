import React, { Component } from 'react';

class BannerHome extends Component {
    render() {
        return (
           
            <section id="our_service" className="our_service " style={{background: '#eee'}}>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-4 mt-3 ">
                <div className="features-icons-item text-center ">
                  <div className="features-icons-icon d-flex ml-5">
                    <img className="img-fluid rounded-circle free-ship " src="img/other/freeship.png" alt="/" />
                  </div>
                  <h3>FREE SHIP</h3>
                  <p className="lead mb-0">Khi mua hàng của chúng tôi bạn sẽ được miễn phí giao hàng Toàn Quốc</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item text-center ">
                  <div className="features-icons-icon d-flex ">
                    <img className="img-fluid rounded-circle w-50 h-50 mx-auto guarentee mt-2" src="img/other/guarantee.jpg" alt=""/>
                  </div>
                  <h3>BẢO HÀNH</h3>
                  <p className="lead mb-0">Mọi sản phẩm của chúng tôi đều có bảo hàng và bảo đảm chính hãng cho quý khách
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-2">
                <div className="features-icons-item text-center">
                  <div className="features-icons-icon d-flex  w-50 h-50 mx-auto sale ">
                    <img className="img-fluid rounded-circle mx-auto" src="img/other/sales-manager.jpg" alt=""/>
                  </div>
                  <div className="text-center">
                    <h3>NHÂN VIÊN THÂN THIỆN</h3>
                    <p className="lead mb-0">Bộ phận hotline24/7 sẵn sàng giải đáp thắc mắc và phục vụ quý khách</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    }
}

export default BannerHome;