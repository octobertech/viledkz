import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavbarTop from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from "./components/Footer";
import Men from "./components/Men";
import Women from "./components/Women";
import Shoes from "./components/Shoes";
import Product from './components/Product';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <NavbarTop/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/men" component={Men}/>
                    <Route exact path="/women" component={Women}/>
                    <Route exact path="/shoes" component={Shoes}/>
                    <Route exact path="/p/:id" component={Product}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
              <Footer/>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
