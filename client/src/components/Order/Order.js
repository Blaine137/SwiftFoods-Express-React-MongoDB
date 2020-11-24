import React from 'react';
import OrderForm from './OrderForm/OrderForm';
import './Order.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Order = (props) => {

    const promise = loadStripe("pk_test_51HpyceBL49buhjQDuLPwxwRTiZ3x5QiRYd8CNFfVgzra0LztQGVmfINoIe7H6pIIxLfUPv1VvbUzENo4SIFXElcM00FVHBBecX");

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center mt-5 mb-5 align-self-center">Order Now!</h3>
                </div>
            </div>
        </div>
        <Elements stripe={promise}>
            <OrderForm/>
        </Elements>
        </>
    );

};

export default Order;