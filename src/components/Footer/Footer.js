import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer" id="footer_page" >
            <div className="container">
              <div className="row">
                <div className="col col-md-3 contact mt-4">
                  <div className="title-footer border-bottom">
                    <span className="footpage_headtitle">NKT MOBILE</span>
                  </div>
                  <div className="mt-4">
                    <p><i className="fas fa-map-marker-alt" /> Trụ sở chính: KP6, Phường Linh Trung, Quận Thủ Đức, TP. Hồ Chí Minh, Việt Nam</p>
                    <p><i className="fas fa-phone" /> 0337796445</p>
                    <p><i className="fas fa-mailbox" /> 17130071@st.hcmuaf.edu.vn</p>
                    <p><i className="fas fa-globe" />NKT.com</p>
                  </div>
                </div>
                <div className="col col-md-3 about-us mt-4">
                  <div className="title-footer border-bottom">
                    <span className="footpage_headtitle">OTHER</span>
                  </div>
                  <div className="mt-4 footpage_link">
                    <p><a href="#">ABOUT US</a></p>
                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">BÁO LỖI</a></p>
                  </div>
                </div>
                <div className="col col-md-3 our-team mt-4">
                  <div>
                    <div className="title-footer border-bottom">
                      <span className="footpage_headtitle">OUR TEAM</span>
                    </div>
                    <div className="mt-4 footpage_link">
                      <p><a href="#">HÀ KIÊN</a></p>
                      <p><a href="#">TUYẾT NHI</a></p>
                      <p><a href="#">MINH THIỆN</a></p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 about-us mt-4">
                  <div className="title-footer border-bottom">
                    <span className="footpage_headtitle">Follow Us</span>
                  </div>
                  <div className="social-links mt-4">
                    <a href="#"><img src="img/foot_icon/facebook.png" alt="Facebook" width={48} style={{textDecoration: 'none', width: '48px'}} /></a>
                    <a href="#"><img src="img/foot_icon/twitter.png" alt="Twitter" width={48} style={{textDecoration: 'none', width: '48px'}} /></a>
                    <a href="#"><img src="img/foot_icon/instagram.png" alt="Instagram" width={48} style={{textDecoration: 'none', width: '48px'}} /></a>
                    <a href="#"><img src="img/foot_icon/youtube.png" alt="YouTube" width={48} style={{textDecoration: 'none', width: '48px'}} /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid bt-footer">
              <div className="row pb-1 mx-auto col-md-12">
                <div className="col-md-4">
                </div>
                <div className="bottom-footer pt-3">
                  <p>© 2019 Copyright by Nhóm 27 Project .NET 2020 . All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </footer>
          
        );
    }
}

export default Footer;