import React,{Component} from "react";
import "./Cart.css";

class Cart extends Component {
    state = {
        name:"",
        email:"",
        address:""
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems
        }
        this.props.createOrder(order);
    }

    render() {
        const {cartItems} = this.props;
        return(
            <section className="cart">
                <div className="container">
                {cartItems.length === 0 ? (
                    <div className="cart-header">Cart is empty</div>
                ) : (
                    <div className="cart-header">
                        You have {cartItems.length} in the cart {""}
                    </div>
                )}
                    <ul className="cart-items">
                        {cartItems.map((item => (
                            <div key={item.id}>
                            <li>
                                <img src={item.imgUrl} alt={item.title} />
                                <p className="product-name">{item.productName}</p>
                                <p className="product-price">${item.price}</p>
                                <button className="btn-delete" onClick={() => this.props.removeFromCart(item)}>&times;</button>
                            </li>   
                            </div>
                            
                        )))} 
                        <div className="cart-end">
                                    {
                                        this.props.cartItems.length !== 0 && 
                                            <div className="total">
                                                <p className="total-text text-center">Total : $<span className="price">{this.props.cartItems.reduce( (acc,item) => {
                                                    return acc + item.price
                                                } , 0)}</span></p>
                                            </div> 
                                    }
                                    <button className="btn-proceed " onClick={() => (this.setState({showCheck:true}))}>Proceed</button>
                                </div>
                        </ul>
                    {this.state.showCheck && this.props.cartItems.length !== 0 && (
                            <div className="checkout">
                            <form onSubmit={this.createOrder}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input name="email" onChange={this.handelInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Name</label>
                                    <input name="name"  onChange={this.handelInput} type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Address</label>
                                    <input name="address"  onChange={this.handelInput} type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn-checkout btn btn-primary">Checkout</button>
                            </form>
                            </div>
                        
                    )}
                    </div>
                </section>
            
        )
    }
}

export default Cart;
