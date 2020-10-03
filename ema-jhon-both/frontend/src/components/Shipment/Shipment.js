import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => {
        console.log("form Sumitted>>>", data);
        const savedCart = getDatabaseCart();
        const orderDetails = {...loggedInUser, products: savedCart, shipping: data, timeStamp: new Date()}

        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            alert("your order placed successfully");
        })
    }
  
    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <Container>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name">
                    <Form.Control name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} placeholder="Enter Name" />
                    {errors.name && <span className="error">Name is required</span>}
                </Form.Group>
                
                <Form.Group controlId="email">
                    <Form.Control name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} placeholder="Enter Email" />
                    {errors.email && <span className="error">Email is required</span>}
                </Form.Group>
                
                <Form.Group controlId="phone">
                    <Form.Control name="phone" ref={register({ required: true })} placeholder="Enter Phone" />
                    {errors.phone && <span className="error">Phone is required</span>}
                </Form.Group>
                
                
                <Form.Group controlId="address">
                    <Form.Control name="address" ref={register({ required: true })} placeholder="Enter Address" />
                    {errors.address && <span className="error">Address is required</span>}
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Col>
            </Row>
        </Container>
    );
};

export default Shipment;