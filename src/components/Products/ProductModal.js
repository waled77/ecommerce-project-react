import React from "react";
import "../Products/Products.css";
import Modal from "react-modal";

function ProductModal(props) {
    const {product,closeModal} = props;
    return (
        <Modal isOpen={product} onRequestClose={closeModal}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="product-info">
                <div className="img-container">
                    <img src={product.imgUrl} alt={product.title} />
                </div>
                <div>
                    <p className="title">{product.productName}</p>
                    <p className="desc">{product.desc}</p>
                    <p className="price">${product.price}</p>
                </div>
            </div>
            {/*  <div className="sizes-container">
                        {product.sizes.map((size) => {
                            return (
                                <span>{size}</span>
                            )
                        })}
                </div>  */}
        </Modal>
    )
}

export default ProductModal;