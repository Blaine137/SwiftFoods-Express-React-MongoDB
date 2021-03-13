import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {Media, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Cart.scss';


const Cart = ({formValues, addToCart, removeFromCart}) => {

    const [total, setTotal] = useState(0.00);

    let updateTotal = (items) => {
        if(items > 0 || items === 0){
            let newPizzaPrice = formValues.pizzas * 6.99;
            let newSaladPrice = formValues.salads * 4.99;
            let newBurgerPrice = formValues.burgers * 8.99;
            let newTotal = newPizzaPrice + newSaladPrice + newBurgerPrice;
            setTotal((newTotal * 1.07).toFixed(2));
        }else if(items < 0){
            setTotal(0)
        }
    };

    useEffect(() => {
        updateTotal(formValues.pizzas)
        updateTotal(formValues.salads)
        updateTotal(formValues.burgers)
    }, [formValues]);

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
            
                <div className="row align-items-center mb-4 mt-4">
                    <div className="col-3 d-flex justify-content-end p-0">
                        <FontAwesomeIcon 
                            icon={faMinus}  
                            size="2x"
                            onClick={() => removeFromCart("pizza", 1)}
                        /> 
                    </div>
                    <div className="col-3 d-flex justify-content-end p-0">
                        <Media 
                            object 
                            src={process.env.PUBLIC_URL + '/assets/images/peppizza.jpg'} 
                            alt="pizza img" 
                            className="d-inline rounded-circle cartImg" 
                        />
                    </div>
                    <div className="col-3 d-flex justify-content-start">
                        {formValues.pizzas} 
                    </div>
                    <div className="col-3 d-flex justify-content-start p-0">
                        <FontAwesomeIcon 
                            icon={faPlus}  
                            size="2x"
                            onClick={() => addToCart("pizza", 1) }
                        />
                    </div>
                </div>

                <div className="row align-items-center mb-4">
                    <div className="col-3 d-flex justify-content-end p-0">
                        <FontAwesomeIcon 
                            icon={faMinus}  
                            size="2x"
                            onClick={() => removeFromCart("salad", 1)}
                        /> 
                    </div>
                    <div className="col-3 d-flex justify-content-end p-0">
                        <Media 
                            object 
                            src={process.env.PUBLIC_URL + '/assets/images/salad.jpg'} 
                            alt="pizza img" 
                            className="d-inline rounded-circle cartImg" 
                        />
                    </div>
                    <div className="col-3 d-flex justify-content-start">
                        {formValues.salads} 
                    </div>
                    <div className="col-3 d-flex justify-content-start p-0">
                        <FontAwesomeIcon 
                            icon={faPlus}  
                            size="2x"
                            onClick={() => addToCart("salad", 1)}
                        />
                    </div>
                </div>

                <div className="row align-items-center mb-4">
                    <div className="col-3 d-flex justify-content-end p-0">
                        <FontAwesomeIcon 
                            icon={faMinus}  
                            size="2x"
                            onClick={() => removeFromCart("burger", 1)}
                        /> 
                    </div>
                    <div className="col-3 d-flex justify-content-end p-0">
                        <Media 
                            object 
                            src={process.env.PUBLIC_URL + '/assets/images/burger.jpg'} 
                            alt="pizza img" 
                            className="d-inline rounded-circle cartImg" 
                        />
                    </div>
                    <div className="col-3 d-flex justify-content-start">
                        {formValues.burgers} 
                    </div>
                    <div className="col-3 d-flex justify-content-start p-0">
                        <FontAwesomeIcon 
                            icon={faPlus}  
                            size="2x"
                            onClick={() => addToCart("burger", 1)}
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-2 mb-2">
                    <div className="col-9">
                        <p className="h5 text-right">Total: {total}</p>
                    </div>
                </div>
           
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <Link to="/checkout" className="w-50 mx-auto text-center">
                            <Button className="checkoutBtn">
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