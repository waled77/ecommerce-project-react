import React, {Component} from "react";
import './App.css';
import data from "./data/data.json";
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import {BrowserRouter,Routes,Route} from "react-router-dom";

class App extends  Component {
  state = {
    products:data.products,
    size:"",
    sort:"",
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
  }

  addToCart = (product) => {
      const {cartItems} = this.state;
      let alradyIntCart = false;
      cartItems.forEach((item) => {
        if(item.id === product.id) {
          item.count++;
          alradyIntCart=true
        }
      });
      if(!alradyIntCart) {
        cartItems.push({...product,count:1});
      }
      this.setState({cartItems});
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

  } 

  createOrder = (order) => {
    alert("Need to save order for " + order.name)
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems:cartItems.filter((x) => x.id !== product.id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x.id !== product.id)));
  }

  filterProducts = (e) => {
    if(e.target.value === "") {
        this.setState({size:e.target.value,product:data.products})
    } else {
      this.setState({
        size:e.target.value,
        products:data.products.filter(product => product.sizes.indexOf(e.target.value)>=0)
      })
    }
  }

  sortProducts = (e) => {
    const sort = e.target.value;
    this.setState({
      sort:sort,
      products:this.state.products
      .slice()
      .sort((a,b) =>
          sort === 'lowest'
          ? a.price < b.price
            ? 1
            : -1
          : sort === 'highest'
          ? a.price > b.price
            ? 1
            : -1
          : a.id > b.id
          ? 1
          : -1 
      ),
    });
  };

  render() {
    return (
          <BrowserRouter>
          <Header cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products products={this.state.products} addToCart={this.addToCart}  count={this.state.products.length} size={this.state.size} sort={this.state.sort} filterProducts={this.filterProducts} sortProducts={this.sortProducts}/>} />
                <Route path="/cart" element={<Cart removeFromCart={this.removeFromCart} cartItems={this.state.cartItems} createOrder={this.createOrder} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />              
              </Routes>
              <Footer />
          </BrowserRouter>
    );
  }
  
}

export default App;
