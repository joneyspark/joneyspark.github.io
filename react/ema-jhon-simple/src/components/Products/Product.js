import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    //console.log(props);
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4> <Link to={"/product/"+key}>{name}</Link> </h4>
                <p><small>by: {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                { props.shoAddToCartBtn &&
                    <button onClick={() => props.handleAddProduct(props.product)} className="addToCartBtn"><FontAwesomeIcon icon={faShoppingBag} />Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;