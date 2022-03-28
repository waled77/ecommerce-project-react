import React from "react";
import './Contact.css';
import {IoLocation,IoMail,IoCall} from "react-icons/io5";

const Contact = () => {
    return (
                    <section className="contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3 text-white">Don't be shy !</h3>
                                    <p className="open-sans-font mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Facere quo temporibus cum voluptates
                                        quia commodi assumenda, eligendi ullam
                                    </p>
                                    <ul className="mb-4">
                                        <li>
                                            <div className="icon-container">
                                                <IoLocation />
                                            </div>
                                            <span className="text">Our Location</span>
                                            <span>Abu Kabir, Ash Sharqia, egypt</span>
                                        </li>
                                        <li>
                                            <div className="icon-container">
                                                <IoMail />
                                            </div>
                                            <span className="text">Our Mail</span>
                                            <span>waledabdelrhman6@gmail.com</span>
                                        </li>
                                        <li>
                                            <div className="icon-container">
                                                <IoCall />
                                            </div>
                                            <span className="text">CALL Us</span>
                                            <span>+201156568690</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <form className="contact-form">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="email" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea placeholder="Enter Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn">
                                                    <span>Send Message</span>
                                                    <div>
                                                        <a href="#"></a>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                </section>
                )
}

export default Contact;
