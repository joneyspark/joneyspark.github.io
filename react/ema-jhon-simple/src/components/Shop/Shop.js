import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    //console.log(fakeData);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousKey = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];
            console.log(existingKey, saveCart[existingKey]);
            return product;
        })
        setCart(previousKey);
    },[])

    const handleAddProduct = (product) =>{
        console.log(product);
        const toBeAdded = product.key;
        const sameCart = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if(sameCart){
            count = sameCart.quantity + 1;
            sameCart.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, sameCart];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleAddProduct = {handleAddProduct} product={product} shoAddToCartBtn={true} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="addToCartBtn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
}

export default Shop;