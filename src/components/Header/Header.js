import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import {IoSearchOutline,IoHeartOutline,IoCartOutline,IoMenuOutline } from "react-icons/io5";

const Header = (props) => {
    const {cartItems} = props;
    const [activeMenu,setActiveMenu] = useState(false);
    const [activeSearch,setActiveSearch] = useState(false);
    const [activeCart,setActiveCart] = useState(false);

    return (
        <div className="header">
            <a href="#" className="brand"> Sogo<span>Shop</span> </a>
            <nav>
                <ul className={activeMenu ? "list-links active": "list-links"}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="right-content">
                <ul className="list-icons">
                    <li className="search" onClick={() =>  setActiveSearch(!activeSearch)}><IoSearchOutline /></li>
                    <li><IoHeartOutline /></li>
                    <li span className="cart-icon-li">
                            <IoCartOutline onClick={() =>  setActiveCart(!activeCart)} />
                            {cartItems.length === 0 ? (
                            <span className="cart-icon">0</span>
                            ) : (
                                <div className="cart-header">
                                    <span className="cart-icon">{props.cartItems.length}</span>
                                </div>
                            )}
                    </li>
                </ul>
                <div className="menu-toggler" onClick={() =>  setActiveMenu(!activeMenu)}>
                    <IoMenuOutline />
                </div>
            </div>
                <div className={activeSearch ? "search-box active": "search-box"}>
                    <input type="text" placeholder="Search..." />
                    <button className="search">Search</button>
                    <span className="close"  onClick={() =>  setActiveSearch(!activeSearch)}>&times;</span>
                </div>
                <div className={activeCart ? "small-cart active": "small-cart"}>
                    {cartItems.length === 0 ? (
                        <div className="cart-small-header">Cart is empty</div>
                    ) : (
                        <div className="cart-small-header">
                            
                        </div>
                    )}
                    <ul className="cart-items"> 
                            {cartItems.map((item => (
                                <div key={item.id}>
                                    <li>
                                        <img src={item.imgUrl} alt={item.title} />
                                        <p className="product-name">{item.productName}</p>
                                        <p className="product-price">${item.price}</p>
                                        <button className="btn-delete" onClick={() => props.removeFromCart(item)}>&times;</button>
                                    </li>   
                                    
                                </div>
                                
                            )))} 
                            <button className="full-cart-btn">
                                <NavLink to="/cart">View Full Cart</NavLink>
                            </button>
                    </ul>        
                </div>    
        </div>
    )
}

export default Header;
