import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { useEffect } from 'react';
const Home = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProducts] = useState(first10);
    console.log(first10);
    
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;