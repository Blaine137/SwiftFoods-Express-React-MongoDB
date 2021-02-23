import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Roll from 'react-reveal/Roll';
import './Checkout.scss';


const Checkout = (props) => {

    let [errors , setErrors] = useState({
		name: null,
		email: null,
		street: null,
		city: null,
        state: null,
        postal_code: null,
	});
	let [formValues, setFormValues] = useState({
		name: null,
		email: null,
		street: null,
		city: null,
        state: null,
        postal_code: null,
	});

        //Stripe Card State/ Payment State
	const [succeeded, setSucceeded] = useState(false);
	const [paymentError, setPaymentError] = useState(null);
	const [processing, setProcessing] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
	const elements = useElements();

    useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("/payment", {
			method: "POST",
			headers: {
			"Content-Type": "application/json"
			},
			body: JSON.stringify({items: { numOfPizzas: props.numOfPizzas, numOfSalads: props.numOfSalads, numOfBurgers: props.numOfBurgers }})
		})
		.then( res => {
			return res.json();
			
		})
		.then(data => {
			setClientSecret(data.clientSecret);
		})
		.catch(err => console.log(err));
	});

	//if info is required check and makes sure it is not empty
	const validateInput = target => {
		
		if(target.required) {
			if(target.value === null || target.value === "") {
				setErrors({ ...errors, ...{ [target.name]: "This field is required and must not be Blank." } });
				return false;
			}
			if(target.name === "email" && !target.value.includes('@')) {
				setErrors({ ...errors, ...{ [target.name]: "Please Enter a valid email address" } });
				return false;
			}
			
		}
		setErrors({ errors, ...{ [target.name]: null } });
		return true;
	};

        //handleChange 
	const HandleBlur = event => {
		let target = event.target;
		//if stripe card input use stripe element error handling else use our error handling
		if(event.elementType === 'card') {
			setDisabled(event.empty);
			setPaymentError(event.error ? event.error.message : "");
		} else if(validateInput(target)) {
			setFormValues({ ...formValues, ...{ [target.name]: target.value } });
		}
	};

	const handleSubmit = async ev => {
		ev.preventDefault();
		setProcessing(true);
		const billingDetails = {
			name: formValues.name,
			email: formValues.email,
			address: {
				city: formValues.city,
				line1: formValues.street,
				state: formValues.state,
				postal_code: formValues.postal_code
			}
		};
		const payload = await stripe.confirmCardPayment(clientSecret, {
			receipt_email: formValues.email,
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: billingDetails,
			}
		});
		if (payload.error) {
			setPaymentError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setPaymentError(null);
			setProcessing(false);
			setSucceeded(true);
		}
	};

    return(
        <>
			<div className="row mt-4">
				<div className="col-12 align-items-left">
					<p className="h4 mb-4">
						<span class="firstWord mr-2">Checkout</span>
					</p>
					<p className="h6 mb-2 text-left">
						TO TEST PAYMENT USE THIS CARD NUMBER WITH A MONTH/YEAR IN THE FUTURE AND ANY CVC - 4242 4242 4242 4242
					</p>
				</div>
			</div>
			<Roll left>
				<Form className="form mx-auto p-0 p-md-5 w-75"  id="payment-form" onSubmit={handleSubmit}>
					{/* Show any error that happens when processing the payment */}
					{paymentError && (
						<div className="cardError" role="alert">
							{paymentError}
						</div>
					)}
					{/* Show a success message upon completion */}
					<p className={succeeded ? "resultMessage" : "resultMessage hidden"}>
						Payment succeeded, see the result in your
						<a href={ `https://dashboard.stripe.com/test/payments` }>{ " " }Stripe dashboard{ " " }</a>
						Refresh the page to pay again.
					</p>
					<FormGroup className="mb-5">
						<Label className="mt-4"  for="name" > Your Name *</Label>
						<Input className="form-control mb-4" type="text" name="name" id="name" maxLength="60" required invalid={errors.name} onBlur={HandleBlur} />
						<FormFeedback className="feedback">{errors.name}</FormFeedback>
						<Label className="mt-4" for="email">Your Email *</Label>
						<Input className="form-control mb-4" type="email" name="email" id="email" required invalid={errors.email} onBlur={HandleBlur}/>
						<FormFeedback className="feedback">{errors.email}</FormFeedback>
					</FormGroup>
					<FormGroup className="mt-5">
						<Label className="mt-4"  for="street">Street *</Label>
						<Input className="form-control mb-4" type="text" name="street" id="street" required invalid={errors.street} onBlur={HandleBlur} spellCheck="true" />			
						<FormFeedback className="feedback">{errors.street}</FormFeedback>
						<Label className="mt-4"  for="city">City *</Label>
						<Input className="form-control mb-4" type="text" name="city" id="city" required invalid={errors.city} onBlur={HandleBlur} spellCheck="true" />			
						<FormFeedback className="feedback">{errors.city}</FormFeedback>
						<Label className="mt-4"  for="state">State *</Label>
						<Input className="form-control mb-4" type="text" name="state" id="state" required invalid={errors.state} onBlur={HandleBlur} spellCheck="true" />			
						<FormFeedback className="feedback">{errors.state}</FormFeedback>
						<Label className="mt-4"  for="postal_code">Zip Code *</Label>
						<Input className="form-control mb-4" type="text" name="postal_code" id="postal_code" required invalid={errors.postal_code} onBlur={HandleBlur} spellCheck="true" />
						<FormFeedback className="feedback">{errors.postal_code}</FormFeedback>
					</FormGroup>
					<FormGroup >
						<label for="card-element">Credit or debit card</label>
						<CardElement options={{hidePostalCode: true}}name="card-element" className="form-control mb-4 stripeElement" onChange={HandleBlur} />
						{/* Show any error that happens when processing the payment */}
						{paymentError && (
							<div className="cardError" role="alert">
								{paymentError}
							</div>
						)}
						{/* Show a success message upon completion */}
						<p className={succeeded ? "resultMessage" : "resultMessage hidden"}>
							Payment succeeded, see the result in your
							<a href={ `https://dashboard.stripe.com/test/payments` }>{ " " }Stripe dashboard{ " " }</a>
							Refresh the page to pay again.
						</p>
					</FormGroup>
					<FormGroup>
						<Button
							type="submit"
							className={"payBtn w-50 d-block mx-auto w-50"}
							disabled={processing || disabled || succeeded}
							id="submit"
						>
							
								{processing ? (
									<div className="spinner" id="spinner"></div>
								) : (
									"Pay"
								)}
						
						</Button>
					</FormGroup>
				</Form>	
			</Roll>    
		
        </>
    );

};

export default Checkout;