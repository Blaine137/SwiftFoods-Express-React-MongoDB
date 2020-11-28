const express = require("express");
const paymentRouter = express.Router();
require('dotenv/config'); //import the env variables
const stripe = require("stripe")(process.env.PRIVATE_STRIPEKEY);

const calculateOrderAmount = items => {
    
    // Replace this constant with a calculation of the order's amount
    let amount = 0.50;
    // Calculate the order total on the server to prevent
    
    if(items.numOfPizzas > 0){
      amount += items.numOfPizzas * parseFloat(6.99);
    }
    if(items.numOfSalads > 0){
      amount += items.numOfSalads * parseFloat(4.99);
    }
    if(items.numOfBurgers > 0){
      amount += items.numOfBurgers * parseFloat(8.99);
    }
    // people from directly manipulating the amount on the client
  
    return parseInt((amount * 1.07) * 100);
  
  };

paymentRouter.route('/')
.post(async (req, res) => {

    const { items } = req.body;
    console.log(items)

    // Create a PaymentIntent with the order amount and currency
  
    const paymentIntent = await stripe.paymentIntents.create({
  
      amount: calculateOrderAmount(items),
  
      currency: "usd"
  
    });
  
    res.send({
  
      clientSecret: paymentIntent.client_secret
  
    });

}); //post request was async

module.exports = paymentRouter;