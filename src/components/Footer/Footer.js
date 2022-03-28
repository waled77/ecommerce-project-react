import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <span className="title">Section Pages</span>
                        <ul className="list-links">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <span className="title">Section Categories</span>
                        <ul className="list-links">
                            <li><a href="#">TShirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <span className="title">Sign up to Newsletter</span>
                        <form>
                            <input placeholder="Your Email.." />
                            <button className="btn">Send</button>
                            <p className="info">
                                Lorem Ipsum is simply dummy text of the <br/>
                                printing and typesetting industry.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
