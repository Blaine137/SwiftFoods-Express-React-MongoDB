import React, { useState, useEffect } from "react";
import './OrderForm.scss';
import {Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom";




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

        //handleChange 
	const HandleBlur = event => {
		let target = event.target;
		//if stripe card input use stripe element error handling else use our error handling
		if(validateInput(target)) {
			props.setFormValues({ ...props.formValues, ...{ [target.name]: target.value } });
		}
	};

	

	return (
            <Form className="form mx-auto p-5"  id="payment-form" onSubmit={(e) => {e.preventDefault()}}>
                <FormGroup className="mb-5">
					<Label className="mt-4"  for="pizzas" > Pizzas*</Label>
                    <Input className="form-control mb-4" type="text" name="pizzas" id="pizzas" maxLength="60" required invalid={errors.pizzas} onBlur={HandleBlur} />
                    <FormFeedback className="feedback">{errors.pizzas}</FormFeedback>
					<Label className="mt-4"  for="salads" > Salads*</Label>
                    <Input className="form-control mb-4" type="text" name="salads" id="salads" maxLength="60" required invalid={errors.salads} onBlur={HandleBlur} />
                    <FormFeedback className="feedback">{errors.salads}</FormFeedback>
					<Label className="mt-4"  for="salads" > Burgers*</Label>
                    <Input className="form-control mb-4" type="text" name="burgers" id="burgers" maxLength="60" required invalid={errors.burgers} onBlur={HandleBlur} />
                    <FormFeedback className="feedback">{errors.burgers}</FormFeedback>
				</FormGroup>
				<Link to="/checkout">
					<Button
						type="submit"
						className={"payBtn w-50 d-block mx-auto "}
						id="submit"
						onClick={() => {
							props.setShowCheckout(true);
						}}>Checkout</Button>
				</Link>
            </Form>
	);
}