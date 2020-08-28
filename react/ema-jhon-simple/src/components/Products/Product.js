import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className="addToCartBtn"><FontAwesomeIcon icon={faShoppingBag} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;