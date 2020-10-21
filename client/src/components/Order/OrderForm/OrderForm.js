import React, { Component } from 'react';
import {Button, Label, Input, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './OrderForm.scss';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length; //if val is not undefined and if the length is greater than zero
const maxLength = len => val => !val || (val.length <= len); 
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

/*
IN ORDER FOR REDUX FORMS TO WORK YOU MUST RUN "YARN ADD REDUX", "YARN ADD REACT-REDUX", AND "YARN ADD REACT-REDUX-FORM"
 */

class OrderForm extends Component {

    state = {
        showModal: false
    };


    changePrice = () => {

        let pizza = document.getElementById('pizzaNum');
        let salad = document.getElementById('saladNum');
        let burger = document.getElementById('burgerNum');
        let newPrice = 0;

        if(pizza && salad && burger){

            if(pizza.value > 0){
                newPrice += pizza.value * 6.99;
            }

            if(salad.value > 0){
                newPrice += salad.value * 4.99;
            }

            if(burger.value > 0){
                newPrice += burger.value * 8.99;
            }
            
            document.getElementById('totalPrice').innerHTML = newPrice.toFixed(2);

        }

    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'select' ? target.select : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    toggleModal = () => {
        this.setState( { showModal: !this.state.showModal } )
    }


    render(){

            

            return(

                <div className="container mt-4" id="subscribeForm">
                    <div className="row">
                            <LocalForm className="mx-auto mb-4 p-4 col-10" onSubmit={this.toggleModal}>
                                <Row>
                                    <div className="mx-auto total">
                                        <span>Your total: </span>
                                        <span id="totalPrice">$0.00</span>
                                    </div>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="shipping" className="col-form-label" lg={2}>Shipping*</Label>
                                    <Col lg={4}>
                                        <Control.select 
                                               model=".shipping"
                                               name="shipping" 
                                               id="shipping"  
                                               required 
                                               className="form-control"
                                               validators={{
                                                   required
                                               }}>
                                            <option value="0">Select...</option>
                                            <option value="1">USPS</option>
                                            <option value="2">UPS</option>
                                            <option value="3">FEDEX</option>
                                        </Control.select>
                                        <Errors
                                            model=".shipping"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required'
                                            }}/>
                                    </Col>
                                    <Label htmlfor="pizzaNum" className="col-form-label" lg={2}>Pizza*</Label>
                                    <Col lg={4}>
                                        <Control.select 
                                               model=".pizzaNum"
                                               name="pizzaNum" 
                                               id="pizzaNum"  
                                               required 
                                               className="form-control"
                                               onChange={this.changePrice}
                                               validators={{
                                                   required
                                               }}>
                                            <option value="0">Select...</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </Control.select>
                                        <Errors
                                            model=".pizzaNum"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required'
                                            }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="saladNum" className="col-form-label" lg={2}>Salad*</Label>
                                    <Col lg={4}>
                                        <Control.select 
                                               model=".saladNum"
                                               name="saladNum" 
                                               id="saladNum"  
                                               required 
                                               className="form-control"
                                               onChange={this.changePrice}
                                               validators={{
                                                   required
                                               }}>
                                            <option value="0">Select...</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </Control.select>
                                        <Errors
                                            model=".saladNum"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required'
                                            }}/>
                                    </Col>
                                    <Label htmlfor="burgerNum" className="col-form-label" lg={2}>Burger*</Label>
                                    <Col lg={4}>
                                        <Control.select 
                                               model=".burgerNum"
                                               name="burgrNum" 
                                               id="burgerNum"  
                                               required 
                                               className="form-control"
                                               onChange={this.changePrice}
                                               validators={{
                                                   required
                                               }}>
                                            <option value="0">Select...</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </Control.select>
                                        <Errors
                                            model=".burgerNum"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required'
                                            }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="fName" className="col-form-label" lg={2}>First Name*</Label>
                                    <Col  lg={4}>
                                        <Control.text
                                            model=".fName" 
                                            className="form-control" 
                                            id="fName" 
                                            name="fName" 
                                            required 
                                            placeholder="Enter Your First Name"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }} />
                                        <Errors
                                        className="text-danger"
                                        model=".fName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                    </Col>
                                    <Label htmlFor="lName" className="col-form-label" lg={2}>Last Name*</Label>
                                    <Col  lg={4}>
                                        <Control.text 
                                               model=".lName"
                                               className="form-control" 
                                               name="lname" id="lName" 
                                               required 
                                               placeholder="Enter Your Last Name"
                                               validators={{
                                                   required,
                                                   minLength: minLength(2),
                                                   maxLength: maxLength(15)
                                               }}/>
                                        <Errors
                                                className="text-danger"
                                                model=".lName"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="email" className="col-form-label" lg={2}>Email*</Label>
                                    <Col lg={4}>
                                        <Control.text
                                               model=".email" 
                                               className="form-control" 
                                               name="email" 
                                               id="email" 
                                               required 
                                               placeholder="Enter Your Email"
                                               validators={{
                                                   required,
                                                   validEmail
                                               }}/>
                                        <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    validEmail: 'Invalid email address'
                                                }}/>
                                    </Col>
                                    <Label htmlFor="address" className="col-form-label" lg={2}>Address*</Label>
                                    <Col lg={4}>
                                        <Control.text
                                               model=".address" 
                                               className="form-control" 
                                               name="address" 
                                               id="address" 
                                               required 
                                               placeholder="Enter Your Address"
                                               validators={{
                                                   required,
                                                   minLength: minLength(5),
                                                   maxLength: maxLength(25)
                                               }} />
                                        <Errors
                                                className="text-danger"
                                                model=".address"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 5 characters',
                                                    maxLength: 'Must be 25 characters or less'
                                                }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="city" className="col-form-label" lg={2}>City*</Label>
                                    <Col lg={4}>
                                        <Control.text
                                               model=".city"
                                               className="form-control" 
                                               required 
                                               name="city" 
                                               id="city" 
                                               placeholder="Enter Your City"
                                               validators={{
                                                   required,
                                                   minLength: minLength(2),
                                                   maxLength: maxLength(15)
                                               }}/>
                                        <Errors
                                                model=".city"
                                                className="text-danger"
                                                component="div"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}/>
                                    </Col>
                                    <Label htmlFor="state" className="col-form-label" lg={2}>State*</Label>
                                    <Col lg={4}>
                                        <Control.text
                                               model=".state" 
                                               className="form-control" 
                                               required 
                                               name="state" 
                                               id="state" 
                                               placeholder="Enter Your State"
                                               validators={{
                                                   required,
                                                   minLength: minLength(2),
                                                   maxLength: maxLength(15)
                                               }}/>
                                        <Errors
                                                model=".state"
                                                className="text-danger"
                                                component="div"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="zipcode" className="col-form-label" lg={2}>Zipcode*</Label>
                                    <Col lg={4}>
                                        <Control.text
                                               model=".zipcode" 
                                               className="form-control" 
                                               required 
                                               name="zipcode" 
                                               id="zipcode" 
                                               placeholder="Enter Your Zipcode"
                                               validators={{
                                                   required,
                                                   minLength: minLength(5),
                                                   maxLength: maxLength(5),
                                                   isNumber
                                               }}/>
                                        <Errors
                                                model=".zipcode"
                                                className="text-danger"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 5 numbers',
                                                    maxLength: 'Must be 5 numbers or less',
                                                    isNumber: 'Must be a number'
                                                }}/>
                                    </Col>
                                    <Label htmlFor="months" className="col-form-label" lg={2}>Months*</Label>
                                    <Col lg={4}>
                                        <Control.select 
                                               model=".months"
                                               name="months" 
                                               id="months"  
                                               required 
                                               className="form-control"
                                               validators={{
                                                   required
                                               }}>
                                            <option value="0">Select...</option>
                                            <option value="1">3 months</option>
                                            <option value="2">6 months</option>
                                            <option value="3">12 months</option>
                                        </Control.select>
                                        <Errors
                                            model=".months"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required'
                                            }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="cardType" className="col-form-label" lg={2}>Card Type*</Label>
                                    <Col lg={4}>
                                        <Control.select model=".cardType" 
                                                        name="cardType" 
                                                        id="cardType" 
                                                        required 
                                                        className="form-control"
                                                        validators={{
                                                            required
                                                        }}>
                                            <option value="0">Select...</option>
                                            <option value="1">Visa</option>
                                            <option value="2">Mastercard</option>
                                            <option value="3">American Express</option>
                                        </Control.select>
                                        <Errors
                                            model=".cardType"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required'
                                            }}/>
                                    </Col>
                                    <Label htmlFor="cardNum" className="col-form-label" lg={2}>Card Num*</Label>
                                    <Col lg={4}>
                                        <Control.password
                                               model=".cardNum" 
                                               className="form-control" 
                                               name="cardNum" 
                                               id="cardNum" 
                                               required 
                                               placeholder="Enter Your Card Number"
                                               validators={{
                                                   required,
                                                   minLength: minLength(16),
                                                   maxLength: maxLength(16),
                                                   isNumber
                                               }}/>
                                        <Errors
                                            model=".cardNum"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must at least 16 numbers',
                                                maxLength: 'Must be 15 numbers or less'
                                            }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                    <Label htmlFor="expireDate" className="col-form-label" lg={2}>Card Expires*</Label>
                                    <Col lg={4}>
                                        <Control.text
                                               model=".expireDate" 
                                               className="form-control" 
                                               name="expireDate" 
                                               id="expireDate" 
                                               required 
                                               placeholder="Enter Your Expire Date"
                                               validators={{
                                                   required,
                                                   minLength: minLength(4),
                                                   maxLength: maxLength(4),
                                                   isNumber
                                               }}/>
                                        <Errors
                                            model=".expireDate"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must at least 4 numbers (month/year)',
                                                maxLength: 'Must be 4 numbers or less (month/year)'
                                            }}/>
                                    </Col>
                                    <Label htmlFor="securityCode" className="col-form-label" lg={2}>SecurityNum*</Label>
                                    <Col lg={4}>
                                        <Control.password
                                               model=".securityCode" 
                                               className="form-control" 
                                               name="securityCode" 
                                               id="securityCode" 
                                               required 
                                               placeholder="Enter Your Security Code"
                                               validators={{
                                                   required,
                                                   minLength: minLength(3),
                                                   maxLength: maxLength(4),
                                                   isNumber
                                               }}/>
                                        <Errors
                                            model=".securityCode"
                                            show="touched"
                                            component="div"
                                            className="text-danger"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must at least 3 numbers',
                                                maxLength: 'Must be 4 numbers or less'
                                            }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group mt-lg-5">
                                        <Button className="btn mx-auto submitBtn subBtn" onClick={() => this.toggleModal()}>Submit</Button>
                                </Row>
                            </LocalForm>
                            <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                                <ModalHeader>Thank You For Ordering!</ModalHeader>
                                <ModalBody>An member from Swift Foods will review your submittion shortly, expect a response within the next 72 hours. </ModalBody>
                                <ModalFooter>
                                    <Button onClick={() => this.toggleModal()}>Close</Button>
                                </ModalFooter>
                            </Modal>
                    </div>
                </div>

            );

    }


}

export default OrderForm;