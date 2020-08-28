import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props.cart.length);
    const {cart,name, course_img,discount_price} = props.cart;

    return (
        <div className="cartCourse">
            <div className="d-flex p-4">
                <div className="cart-left">
                    <img width="50" src={course_img} alt=""/>
                </div>
                <div className="cart-right">
                    <p>{name}</p>
                    <p>Price: <span>$</span>{discount_price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;