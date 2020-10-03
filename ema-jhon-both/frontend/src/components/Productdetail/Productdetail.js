import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product';

const Productdetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/product/' + productKey)
        .then(res => res.json())
        .then(data=> {
            setProduct(data);
        })
    }, [productKey]);
    // const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <Product product={product} shoAddToCartBtn = {false}></Product>
        </div>
    );
};

export default Productdetail;