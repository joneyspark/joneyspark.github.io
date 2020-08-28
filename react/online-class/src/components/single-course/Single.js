import React from 'react';
import './Single.css';
import Cart from '../cart/Cart';

const Single = (props) => {
const carts = props.carts;

let total = 0;
for (let i = 0; i < carts.length; i++) {
    const course_price = carts[i];
    total = total + course_price.discount_price;
}

let shipping = 0;
if(total > 10){
    shipping = 0;
}else if(total > 5){
    shipping = 1;
}else if(total > 0){
    shipping = 2;
}

const tax = total / 2;

const formatNumber = (num) => {
    const precision = num.toFixed(2)
    return Number(precision);
}

const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div className="cart-wraper">
            <div className="cartbox">
                <h4 className="total-added">Total Added Courses: {carts.length}</h4>
                {
                    carts.map(cart => <Cart cart={cart} key={cart.id} total={total}></Cart>)
                }
                <div className="cart-calculation d-flex justify-content-between">
                    <p>Courses Price:</p>
                    <p>${total}</p>
                </div>
                <div className="cart-calculation d-flex justify-content-between">
                    <p>Shipping cost:</p>
                    <p>${shipping}</p>
                </div>
                <div className="cart-calculation d-flex justify-content-between">
                    <p>tax <small>+VAT:</small></p>
                    <p>${formatNumber(tax)}</p>
                </div>

                <div className="cart-calculation d-flex justify-content-between">
                    <p>Grand Total:</p>
                    <p>${grandTotal}</p>
                </div>
            </div>
        </div>
    );
};

export default Single;