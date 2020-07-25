import React,{ Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Header/Nav";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
class App extends Component {
    render() {
      return (
        <Router>
          <div style={{ position:"relative", minHeight:"100%"}}>
         
          <Nav/>
     
          <div style={{paddingBottom:600}}>
            
            <div >
  
            {this.showMenu(routes)}
            </div>
              
          </div >
          <div style={{ position:"absolute",width: "100%",bottom:0,left:0 }}>
          <Footer/>
          </div>
          </div>
        </Router>
      );
    
    }
    showMenu = (routes) => {
      var result = null;
      if (routes.length>0){
        result = routes.map((route,index)=>{
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        });
      }
      return <Switch>{result}</Switch>;
    }
  }
  
  export default App;
