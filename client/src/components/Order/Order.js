import React, {useState} from 'react';
import OrderForm from './OrderForm/OrderForm';
import Checkout from '../Checkout/Checkout';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './Order.scss';


const Order = (props) => {

    let [showCheckout, setShowCheckout] = useState(false);

    const promise = loadStripe("pk_test_51HpyceBL49buhjQDuLPwxwRTiZ3x5QiRYd8CNFfVgzra0LztQGVmfINoIe7H6pIIxLfUPv1VvbUzENo4SIFXElcM00FVHBBecX");

    let form = null;
    if(showCheckout){
        form = (<Elements stripe={promise}><Checkout numOfPizzas={props.formValues.pizzas} numOfSalads={props.formValues.salads} numOfBurgers={props.formValues.burgers}/> </Elements>);
    }else{
        form = (<OrderForm formValues={props.formValues} HandleBlur={props.HandleBlur} setShowCheckout={setShowCheckout}/>);
    }

    return(
        <>
            <div className="container w-75 pl-0 pr-0">
                {form}
            </div>    
        </>
    );

};

export default Order;