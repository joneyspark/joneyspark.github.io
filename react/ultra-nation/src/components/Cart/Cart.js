import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    /* let tottalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        tottalPopulation = tottalPopulation + country.population;
    }
     */
    const tottalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    return (
        <div>
            <h3>Total Population: {tottalPopulation}</h3>
        </div>
    );
};

export default Cart;