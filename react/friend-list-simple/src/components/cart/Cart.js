import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    return (
        <div>
            <h1>Friends Added: {cart.length}</h1>
            {
                cart.map(c => <div>
                    <small>Name: {c.first_name + " " + c.last_name}</small>
                </div>)
            }
        </div>
    );
};

export default Cart;