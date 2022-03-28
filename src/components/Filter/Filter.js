import React,{Component} from "react";
import "./Filter.css";

class Filter extends Component {
    render() {
        console.log(this.props)
        return (
                <div className="filter">
                    <h2 className="filter-title text-center">Filter</h2>
                    <div className="num-of-products"> Number {this.props.count} Products</div>
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
            )    
    }
}

export default Filter;
