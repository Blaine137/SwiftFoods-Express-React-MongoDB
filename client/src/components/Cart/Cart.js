import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {Media, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Cart.scss';


const Cart = ({formValues, addToCart, removeFromCart}) => {

    return(
        <>
            <div className="container w-75 pl-0 pr-0">
                <div className="row mt-5">
                        <div className="col-12 align-items-left">
                            <p className="h4 mb-2">
                                <span class="firstWord mr-2">Cart</span>
                            </p>
                        </div>
                </div>
            </div>
            <div className="container w-75 pl-0 pr-0">
                <p className="d-inline-flex align-items-center">
                    <FontAwesomeIcon 
                        icon={faMinus} 
                        className="mr-5" 
                        size="2x"
                        onClick={() => removeFromCart("pizza", 1)}
                    /> 
                        <Media 
                            object 
                            src={process.env.PUBLIC_URL + '/assets/images/peppizza.jpg'} 
                            alt="pizza img" 
                            className="d-inline rounded-circle mr-3" 
                        />
                        {formValues.pizzas} 
                    <FontAwesomeIcon 
                        icon={faPlus} 
                        className="ml-5" 
                        size="2x"
                        onClick={() => addToCart("pizza", 1)}
                    />
                </p>
                <Link to="/checkout">
                    <Button className="orderBtn d-block">
                        Checkout
                    </Button>
                </Link>
            </div>
        </>
    );

};

export default Cart;