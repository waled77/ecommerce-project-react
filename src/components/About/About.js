import React from "react";
import "./About.css";
import featImg1 from "../../imgs/serv/serv1.jpg";
import featImg2 from "../../imgs/serv/serv2.jpg";
import featImg3 from "../../imgs/serv/serv3.jpg";

const About = () => {
    return (
        <section className="about">
                <div className="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="feat">
                                    <img src={featImg1} alt="" />
                                    <h3 className="title-feat">Our Vision</h3>
                                    <p className="info-feat">
                                        Lorem Ipsum is simply dummy text of the printing 
                                        the 1500s, when an unknown printer took 
                                        scrambled it to make a scrambled 
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="feat">
                                    <img src={featImg2} alt="" />
                                    <h3 className="title-feat">What We Do</h3>
                                    <p className="info-feat">
                                        Lorem Ipsum is simply dummy text of the printing
                                        the 1500s, when an unknown printer took
                                        scrambled it to make a scrambled
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="feat">
                                    <img src={featImg3} alt="" />
                                    <h3 className="title-feat">Company History</h3>
                                    <p className="info-feat">
                                        Lorem Ipsum is simply dummy text of the printing 
                                        the 1500s, when an unknown printer took 
                                        scrambled it to make a scrambled 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
        </section>
    )
}

export default About;
