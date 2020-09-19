import React from 'react';
import { removeFromCart } from '../Redux/Actions/cartActions';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            {
                cart.map(product => <li key={product.cartId}> {product.name} <Button onClick={() => removeFromCart(product.cartId)}>X</Button></li>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);