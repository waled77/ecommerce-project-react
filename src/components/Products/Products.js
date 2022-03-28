import React,{Component} from "react";
import "./Products.css";
import {IoCartOutline,IoHeartOutline,IoHappyOutline} from "react-icons/io5";
import ProductModal from "./ProductModal";


class Products extends Component {
    state = {
        product:""
    }

    render() {
        const openModal = (product) => {
            this.setState({
                product:product
            })
        }

        const closeModal = () => {
            this.setState({
                product:false
            })
        }

        return (
            <section className="products text-center">
                    <div className="filter">
                        <h2 className="filter-title text-center">Filter</h2>
                        <div className="num-of-products">   TShirts  {this.props.count} of Products </div>
                            <div className="filter-by-size">
                                <span>Filter</span>
                                <select className="filter-select" value={this.props.size} onChange={this.props.filterProducts}>
                                    <option value="ALL">ALL</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>
                            <div className="filter-by-size">
                                <span >Order</span>
                                <select className="filter-select" value={this.props.sort} onChange={this.props.sortProducts}>
                                    <option value="latest">Latest</option>
                                    <option value="lowest">Lowest</option>
                                    <option value="highest">Highest</option>
                                </select>
                            </div>
                    </div>
                    <div className="row products-row" >
                        {this.props.products.map(product => (
                            
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                                    <div className="product">
                                        <h3 className="title">{product.productName}</h3>
                                        <div className="product-item">
                                            <a href="#" onClick={() => openModal(product)}>
                                                <img src={product.imgUrl} />
                                            </a>
                                        </div>
                                        <div className="show-icons">
                                                <li><IoHappyOutline /></li>
                                                <li><IoHeartOutline /></li>
                                            </div>
                                        <div className="product-bottom">
                                            <p className="desc" onClick={() => this.props.addToCart(product)}><IoCartOutline /></p>
                                            <p className="price">${product.price}</p>
                                        </div>    
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ProductModal product={this.state.product} closeModal={closeModal} />
            </section>
        ) 
    }
}

export default Products;
