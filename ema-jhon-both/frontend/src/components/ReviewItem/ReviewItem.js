import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity, img, key, price} = props.product;
    console.log(props);
    return (
        <div className="reviewItem-box">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <h4>Quantity: {quantity}</h4>
                <h4>Price: {price} X {quantity} = {price * quantity}</h4>
                <button onClick={()=> props.RemoveProduct(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;