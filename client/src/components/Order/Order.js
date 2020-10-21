import React from 'react';
import OrderForm from './OrderForm/OrderForm';
import './Order.scss';

const Order = (props) => {

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center mt-5 mb-5 align-self-center">Order Now!</h3>
                </div>
            </div>
        </div>
        <OrderForm/>
        </>
    );

};

export default Order;