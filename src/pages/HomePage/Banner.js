import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
class Banner extends Component {
    render() {
        return (
            
            <div className="container-fluid">
                
               <Image src="img/slide/banner.jpg" fluid style={{width:"100%",marginTop:20}} /> 
            </div>
        );
    }
}

export default Banner;