import React, { useState } from "react";
import './OrderForm.scss';
import {Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom";
import Roll from 'react-reveal/Roll';




export default function OrderForm(props) {
	
	let [errors , setErrors] = useState({
		pizzas: null,
		salads: null,
		burgers: null
	});

	//if info is required check and makes sure it is not empty
	const validateInput = target => {
		var regex = ('^[0-9]$');
		if(target.required) {
			if(target.name === "pizzas" && !target.value.match(regex)){
				setErrors({...errors, ...{ [target.name]: "Please enter only numbers 0-9" }})
				return false;
			}
			if(target.name === "salads" && !target.value.match(regex)){
				setErrors({...errors, ...{ [target.name]: "Please enter only numbers 0-9" }})
				return false;
			}
			if(target.name === "burgers" && !target.value.match(regex)){
				setErrors({...errors, ...{ [target.name]: "Please enter only numbers 0-9" }})
				return false;
			}
		}
		setErrors({ errors, ...{ [target.name]: null } });
		return true;
	};

	return (
		<>
			<div className="row mt-5">
				<div className="col-12 align-items-left">
					<p className="h4 mb-2">
						<span class="firstWord mr-2">Order</span>
					</p>
				</div>
			</div>
			<Roll left>
				<Form className="form mx-auto p-0 p-md-5 w-75"  id="payment-form" onSubmit={(e) => {e.preventDefault()}}>
					<FormGroup className="mb-5">
						<Label className="mt-4"  for="pizzas" > Pizzas*</Label>
						<Input className="form-control mb-4" type="text" name="pizzas" id="pizzas" maxLength="60" required invalid={errors.pizzas} onBlur={props.HandleBlur} />
						<FormFeedback className="feedback">{errors.pizzas}</FormFeedback>
						<Label className="mt-4"  for="salads" > Salads*</Label>
						<Input className="form-control mb-4" type="text" name="salads" id="salads" maxLength="60" required invalid={errors.salads} onBlur={props.HandleBlur} />
						<FormFeedback className="feedback">{errors.salads}</FormFeedback>
						<Label className="mt-4"  for="salads" > Burgers*</Label>
						<Input className="form-control mb-4" type="text" name="burgers" id="burgers" maxLength="60" required invalid={errors.burgers} onBlur={props.HandleBlur} />
						<FormFeedback className="feedback">{errors.burgers}</FormFeedback>
					</FormGroup>
					<Link to="/checkout" className="submitLink">
						<Button
							type="submit"
							className="btn submitBtn w-50 d-block mx-auto w-75 text-center"
							id="submit"
							onClick={() => {
								props.setShowCheckout(true);
							}}>Checkout</Button>
					</Link>
				</Form>
			</Roll>
		</>
	);
}