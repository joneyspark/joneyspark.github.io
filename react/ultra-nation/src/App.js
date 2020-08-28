import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart.js';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      setCountries(data);
      console.log(data);
    })
    .catch(error => console.log(error))
  }, [])
  const [cart, setCart] = useState([]);
  const handleCountry = (country) => {
   const newCart = [...cart, country];
   setCart(newCart);
  }
  return (
    <div className="Countries-container">
      <h1>Total Country: {countries.length}</h1>
      <h1>Total Added Country: <Cart cart={cart}></Cart> </h1>
      <div className="country-wrap">
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleCountry={handleCountry}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
