import React, { useContext } from 'react';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h3>Product Name: {name}</h3>
        </div>
    );
};

export default CategoryDetail;