import React, { useState, useEffect } from 'react';
import CategoryDetail from '../CategoryDetails/CategoryDetail';
import { useContext } from 'react';
import {CategoryContext} from '../../components/Home/Home';

const allproducts = [
    {name:'lenovo', category:'laptop'}, {name:'Asus', category:'laptop'}, {name:'hp', category:'laptop'}, {name:'dell', category:'laptop'},
    {name:'Samsung', category:'mobile'}, {name:'Nokia', category:'mobile'}, {name:'Apple', category:'mobile'}, {name:'walton', category:'mobile'},
    {name:'canon', category:'camera'}, {name:'nikkon', category:'camera'}, {name:'Soney', category:'camera'}, {name:'LG', category:'camera'},
]

const Category = () => {
    const [catContext, setCounter] = useContext(CategoryContext);
    const [producs, setProducts] = useState([]);
    useEffect(() =>{
        const matchProduct = allproducts.filter(pd => pd.category.toLowerCase() === catContext.toLowerCase())
        setProducts(matchProduct);
    }, [catContext]);
    return (
        <div>
            <h1>Select Your Category: {catContext}</h1>
            <button onClick={() => setCounter('Laptop')}>Laptop</button>
            <button onClick={() => setCounter('Mobile')}>Mobile</button>
            <button onClick={() => setCounter('Camera')}>Camera</button>

            {
                producs.map(product => <CategoryDetail product={product}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;