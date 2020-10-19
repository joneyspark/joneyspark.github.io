import React, { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
const Shop = () => {
    // const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState([]);
    //console.log(fakeData);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState('');
    document.title = "Shop More";

    useEffect(()=>{
        fetch('http://localhost:4000/getProduct?search='+search)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data);
        })
    }, [search]);

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        if(products.length > 0){
            const previousKey = productKeys.map(existingKey => {
                const product = products.find(pd => pd.key === existingKey);
                product.quantity = saveCart[existingKey];
                console.log(existingKey, saveCart[existingKey]);
                return product;
            })
            setCart(previousKey);
        }
    },[products])

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

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                
                    <input type="text" onBlur={handleSearch} />
                
                {
                    products.map(product => <Product handleAddProduct = {handleAddProduct} product={product} shoAddToCartBtn={true} key={product.id}></Product>)
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