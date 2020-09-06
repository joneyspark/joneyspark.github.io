import React, { useState }from 'react';
import About from '../About/About';
import { createContext } from 'react';
export const CategoryContext = createContext();

const Home = () => {
    const [counter, setCounter] = useState('laptop');
    return (
        <CategoryContext.Provider value={[counter, setCounter]}>
            <h1>Home Counter: {counter}</h1>
            <About></About>
        </CategoryContext.Provider>
    );
};

export default Home;