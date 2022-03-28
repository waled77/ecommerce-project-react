import React,{useState} from "react";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from "../../imgs/t1.png";
import sliderImg2 from "../../imgs/t2.png";
import sliderImg3 from "../../imgs/t3.png";

const Home = () => {
    const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };
    return (
        <section className="slider">
            <Carousel nSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-flex w-100"
                    src={sliderImg1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>new collection</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's standard dummy text <br />
                            ever since the 1500s <br />
                        </p>
                        <button className="btn">See More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sliderImg2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>new collection</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's standard dummy text <br />
                            ever since the 1500s <br />
                        </p>
                        <button className="btn">See More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sliderImg3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>new collection</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's standard dummy text <br />
                            ever since the 1500s <br />
                        </p>
                        <button className="btn">See More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Home;
