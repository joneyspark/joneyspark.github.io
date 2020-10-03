import React from 'react';
import { Button, Container } from 'react-bootstrap';
import fakeData from '../../fakeData';

const ManageInventory = () => {
    
    const inventoryAddProduct = () => {
        // console.log("fake data >>>>", fakeData);

        fetch('http://localhost:4000/addProduct', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <Container>
                <Button onClick={inventoryAddProduct}>Bulk Add Products</Button>
            </Container>
        </div>
    );
};

export default ManageInventory;