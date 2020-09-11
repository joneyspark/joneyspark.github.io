import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import {useHistory} from 'react-router-dom';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    useEffect(() =>{
        //cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    const RemoveProduct = (productKey) => {
        //console.log("Removed Clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    let history = useHistory();

    const proceedToCheckout = () =>{
        history.push('/shipment');
        /* setCart([]);
        setOrderPlaced(true);
        processOrder(); */
    }
    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt="" />
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem product={pd} key={pd.key} RemoveProduct={RemoveProduct}></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={proceedToCheckout} className="addToCartBtn">Procedd to Checkout</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;