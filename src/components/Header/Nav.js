import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { Link } from 'react-router-dom';
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        visibility: false
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if (username==="admin" && password==="123"){
      this.setState({
            isLogin: true
      });
    }
  }
  onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

    render() {
     
      const stylebtn = {visibility:'hidden'}
      if (this.state.isLogin){
        stylebtn.visibility = 'visible'
      };
     
        return (
            <header className="sticky-header">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-custom  " style={{height:82}}>
              <div className="container">

                <Link className="navbar-brand text-center" to="/"><img className="img-fluid" src="img/other/android-logo.png" style={{width: '60px', height: '60px'}} alt="logo" /></Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse collapse " id="navbarsExample04">
                  <ul className="navbar-nav mr-auto ">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Trang chủ<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-hover" to="/product" id="dropdown04" data-toggle="dropdown">Sản
                        phẩm</a>
                      <div className="dropdown-menu" aria-labelledby="dropdown04">
                        <Link className="dropdown-item all-phone" to="/product">Tất cả</Link>
                        <a className="dropdown-item samsung" href="listproduct.html">SamSung</a>
                        <a className="dropdown-item realmi" href="listproduct.html">Realmi</a>
                        <a className="dropdown-item xiaomi" href="listproduct.html">Xiaomi</a>
                        <a className="dropdown-item oppo" href="listproduct.html">Oppo</a>
                        <a className="dropdown-item huawei" href="listproduct.html">Huawei</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/aboutus">Giới thiệu</Link>
                    </li>
                  </ul>
                  <form className="form-inline mr-auto  my-md-0 " >
                    <input className="form-control" type="text" placeholder="Search" />
                    <button className="btn btn btn-primary btn-outline-light " type="submit"><i className="fas fa-search" />
                    </button>
                  </form>
                  <div className="col-md-2  mr-auto  right-align ">
                    <button role="button" type="button" className="btn btn-primary btn-outline-light float-md-right my-3 mx-1" data-toggle="dropdown" id="account_button">
                      <i className="fas fa-user-circle" />
                    </button>
                   
                    <div className="dropdown-menu my-auto">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#signInModel">Đăng
                        nhập</a>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#createAccountModel">Đăng
                        ký</a>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#forgetPass">Quên mật
                        khẩu</a>
                      <a className="dropdown-item" href="userinfo.html">Tài khoản của tôi</a>
                      <a className="dropdown-item" href="listorder.html">Đơn hàng của tôi</a>
                    </div>
                    <button className="btn btn-primary btn-outline-light my-3 mx-1 float-md-right" type="button"><Link to="/cart">
                      <i className="fas fa-shopping-cart" /></Link><i className="badge badge-warning">0</i>
                    </button>
                    
                  </div>
                  
                </div>
                {/* tên khách sau khi login */}
                <button role="button" type="button" className="btn btn-primary btn-outline-light " 
                align="center" style={{ position:"absolute",right:70,width:120}}>Admin</button>
              </div>
              {/* nút truy cập admin */}
              <button role="button" type="button" style={stylebtn} className="btn btn-primary btn-outline-light ">
                      <i className="fas fa-user-circle" />
              </button>
              {/* form login */}
              <div  className="modal fade" id="signInModel" tabIndex={-1} role="dialog" aria-labelledby="signInModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title ml-3" id="signInModelTitle">Đăng Nhập</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        <form onSubmit={this.onSubmit}>
                          <p className="mt-1 mb-1">Tài Khoản:</p>
                          <input type="text" id="inputUser_signIn" className="mb-3 form-control" placeholder="Tài Khoản" required autoFocus={true} value={this.state.username} name="username" onChange={this.onChange} />
                          <p className="mt-3 mb-1">Mật Khẩu:</p>
                          <input type="password" id="inputPassword_signIn" className="mb-3 form-control" placeholder="Mật Khẩu" required  value={this.state.password} name="password" onChange={this.onChange}/>
                          <button className="my-3 mt-2 btn btn-lg btn-primary btn-block col-sm-12 rounded-lg" type="submit"
                          >Đăng Nhập
                          </button>
                          <div className="row ml-4">
                            <ul className="list-group list-group-horizontal">
                              <li className="list-group-item border-0"><a href="#" data-toggle="modal" data-target="#forgetPass" data-dismiss="modal" aria-label="Close">Quên Mật Khẩu?</a></li>
                              <li className="list-group-item border-0"><a href="#" data-toggle="modal" data-target="#createAccountModel" data-dismiss="modal" aria-label="Close">Tạo Tài Khoản?</a></li>
                            </ul>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* form registration */}
              <div className="modal fade" id="createAccountModel" tabIndex={-1} role="dialog" aria-labelledby="createAccountModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title ml-3" id="createAccountModelTitle">Tạo Tài Khoản</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        <form>
                          <p className="mt-1 mb-1">Tài Khoản:</p>
                          <input type="text" id="inputUser_createAccount" className="mb-3 form-control" placeholder="Tài Khoản" required autoFocus={true} />
                          <p className="mt-3 mb-1">Mật Khẩu:</p>
                          <input type="password" id="inputPassword_createAccount" className="mb-3 form-control" placeholder="Mật Khẩu" required />
                          <p className="mt-3 mb-1">Nhập Lại Mật Khẩu:</p>
                          <input type="password" id="inputConfirmPassword_createAccount" className="mb-3 form-control" placeholder="Nhập Lại Mật Khẩu" required />
                          <button className="my-4 btn btn-lg btn-primary btn-block col-sm-12 rounded-lg" type="submit">Đăng Ký
                          </button>
                          <div className="row align-items-center">
                            <a className=" col-xl-4 mx-auto" data-toggle="modal" data-target="#signInModel" data-dismiss="modal" aria-label="Close" href="#"> <i className="fas fa-arrow-left" /> Trở Lại</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="forgetPass" tabIndex={-1} role="dialog" aria-labelledby="forgetPassTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title ml-3" id="forgetPassTitle">Quên Mật Khẩu</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        <form>
                          <p className="mt-3 mb-1">Tài Khoản</p>
                          <input type="text" id="inputUser" className="mb-3 form-control" placeholder="Tài Khoản" required autoFocus={true} />
                          <p className="mt-3 mb-1"> Nhập Captcha</p>
                          <input type="text" id="inputPassword" className="mb-3 form-control" placeholder="Nhập Captcha" required />
                          <div className="row mx-0">
                            <img src="http://placehold.it/200x50"alt="capcha image" />
                            <button className="my-3 mx-3"><i className="fas fa-sync-alt my-auto" /></button>
                          </div>
                          <button className="my-3 btn btn-lg btn-primary btn-block float-left col-sm-12 rounded-lg" type="submit">Lấy Lại Mật Khẩu
                          </button>
                          <div className="row align-items-center">
                            <a className=" col-xl-4 mx-auto" data-toggle="modal" data-target="#signInModel" data-dismiss="modal" aria-label="Close" href="#"> <i className="fas fa-arrow-left" /> Trở Lại</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          
        );
    }
}
export default Nav;