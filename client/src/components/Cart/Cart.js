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
            <div className="container w-75 pl-0 pr-0 mt-2 mb-2">
                <div className="row align-self-center">
                    <div className="col-12">
                        <p className=" my-auto">
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
                                    className="d-inline rounded-circle mr-3 cartImg" 
                                />
                                {formValues.pizzas} 
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className="ml-5" 
                                size="2x"
                                onClick={() => addToCart("pizza", 1)}
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div className="container w-75 pl-0 pr-0 mt-2 mb-2">
                <div className="row align-self-center">
                    <div className="col-12">
                        <p className="my-auto">
                            <FontAwesomeIcon 
                                icon={faMinus} 
                                className="mr-5" 
                                size="2x"
                                onClick={() => removeFromCart("salad", 1)}
                            /> 
                                <Media 
                                    object 
                                    src={process.env.PUBLIC_URL + '/assets/images/peppizza.jpg'} 
                                    alt="pizza img" 
                                    className="d-inline rounded-circle mr-3 cartImg" 
                                />
                                {formValues.salads} 
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className="ml-5" 
                                size="2x"
                                onClick={() => addToCart("salad", 1)}
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div className="container w-75 pl-0 pr-0 mt-2 mb-2">
                <div className="row align-self-center">
                    <div className="col-12">
                        <p className="my-auto">
                            <FontAwesomeIcon 
                                icon={faMinus} 
                                className="mr-5" 
                                size="2x"
                                onClick={() => removeFromCart("burger", 1)}
                            /> 
                                <Media 
                                    object 
                                    src={process.env.PUBLIC_URL + '/assets/images/peppizza.jpg'} 
                                    alt="pizza img" 
                                    className="d-inline rounded-circle mr-3 cartImg" 
                                />
                                {formValues.burgers} 
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className="ml-5" 
                                size="2x"
                                onClick={() => addToCart("burger", 1)}
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div className="container w-75 pl-0 pr-0 mt-2 mb-2">
                <div className="row align-self-start">
                    <div className="col-12">
                        <Link to="/checkout" className="mr-auto">
                            <Button className="orderBtn d-block mr-auto">
                                Checkout
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Cart;