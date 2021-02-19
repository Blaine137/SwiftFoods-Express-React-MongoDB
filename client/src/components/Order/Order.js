import React, {useState} from 'react';
import OrderForm from './OrderForm/OrderForm';
import Checkout from '../Checkout/Checkout';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './Order.scss';


const Order = (props) => {

    //Reactstrap Form state - number of pizzas, salads, burgers
	let [formValues, setFormValues] = useState({
		pizzas: 0,
		salads: 0,
		burgers: 0
    });
    let [showCheckout, setShowCheckout] = useState(false);

    const promise = loadStripe("pk_test_51HpyceBL49buhjQDuLPwxwRTiZ3x5QiRYd8CNFfVgzra0LztQGVmfINoIe7H6pIIxLfUPv1VvbUzENo4SIFXElcM00FVHBBecX");

    let form = null;
    if(showCheckout){
        form = (<Elements stripe={promise}><Checkout numOfPizzas={formValues.pizzas} numOfSalads={formValues.salads} numOfBurgers={formValues.burgers}/> </Elements>);
    }else{
        form = (<OrderForm formValues={formValues} setFormValues={setFormValues} setShowCheckout={setShowCheckout}/>);
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