import React from 'react';
import './Cart.scss';

const Cart = ({formValues}) => {

    console.log(formValues)

    return(
        <div className="container w-75 pl-0 pr-0 py-4">
            <p className="my-auto">this is the cart page</p>
        </div>
    );

};

export default Cart;