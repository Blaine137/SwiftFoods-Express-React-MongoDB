import React from 'react';
import Checkout from '../Checkout/Checkout';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './Order.scss';


const Order = (props) => {

    const promise = loadStripe("pk_test_51HpyceBL49buhjQDuLPwxwRTiZ3x5QiRYd8CNFfVgzra0LztQGVmfINoIe7H6pIIxLfUPv1VvbUzENo4SIFXElcM00FVHBBecX");

    return(
        <>
            <div className="container w-75 pl-0 pr-0">
                <Elements stripe={promise}>
                    <Checkout 
                        numOfPizzas={props.formValues.pizzas} 
                        numOfSalads={props.formValues.salads} 
                        numOfBurgers={props.formValues.burgers}
                    /> 
                </Elements>
            </div>    
        </>
    );

};

export default Order;