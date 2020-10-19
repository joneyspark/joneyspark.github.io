import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm  from './SimpleCardForm';
import SplitForm from './SplitForm';

const stripePromise = loadStripe('pk_test_51HaNLcHxNp4OhwgVzLWTN2xdfmXbbzbyrTRolroW1wgJ3TQI5MbdOKHAnIuoFeONIUfWKDmy7WOlDQVim9TMHfjV00WETkAFux');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment = {handlePayment}></SimpleCardForm>
            {/* <SplitForm></SplitForm> */}
            {/* <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
                /> */}
        </Elements>
    );
};

export default ProcessPayment;