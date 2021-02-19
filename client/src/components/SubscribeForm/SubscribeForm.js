import React, { Component } from 'react';
import {Button, Label, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './SubscribeForm.scss';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Roll from 'react-reveal/Roll';


const required = val => val && val.length; //if val is not undefined and if the length is greater than zero
const maxLength = len => val => !val || (val.length <= len); 
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

/*
IN ORDER FOR REDUX FORMS TO WORK YOU MUST RUN "YARN ADD REDUX", "YARN ADD REACT-REDUX", AND "YARN ADD REACT-REDUX-FORM"
 */


class SubscribeForm extends Component {

    state = {
        showModal: false
    };
 

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'select' ? target.select : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        
        alert('Thank you for submitting the form');
        event.preventDefault();
    }

    toggleModal = () => {
        this.setState( { showModal: !this.state.showModal } )
    }


    render(){

            

        if(this.props.loggedIn){
           
            return(
                <div className="container">
                    <h3 className="text-center mt-5 mb-5 align-self-center">Thank you for subscribing!</h3>
                    <p className="text-left">Dear {this.props.user}, </p>
                    <p className="text-left pl-5">thank you so much for subscribing!</p>
                    <p className="text-left pl-5">We have sent an email to you, please check your spam folder if it cannot be found.</p>
                    <p className="text-left ">Sincerly, Swiftfoods</p>
                </div>
            );
        }else{
            return(

                <div className="container w-75 pl-0 pr-0" id="subscribeForm">
                    <div className="row mt-4">
                        <div className="col-12 align-items-left">
                            <p className="h4 mb-4">
                                <span class="firstWord mr-2">Subscribe</span>
                            </p>
                            <p className="h6 mb-2 text-left">
                                TO TEST PAYMENT USE THIS CARD NUMBER WITH A MONTH/YEAR IN THE FUTURE AND ANY CVC - 4242 4242 4242 4242
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                            <Roll left>
                                <LocalForm className="mx-auto mb-4 p-4" onSubmit={this.toggleModal}>
                                    <Row className="form-group mt-lg-5">
                                        <Col lg={6}>
                                            <Label htmlFor="fName" className="col-form-label text-left pl-0" lg={6}>First Name*</Label>
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
                                        <Col  lg={6}>
                                            <Label htmlFor="lName" className="col-form-label pl-0 text-left" lg={6}>Last Name*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="email" className="col-form-label pl-0 text-left" lg={6}>Email*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="address" className="col-form-label pl-0 text-left" lg={6}>Address*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="city" className="col-form-label pl-0 text-left" lg={6}>City*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="state" className="col-form-label pl-0 text-left" lg={6}>State*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="zipcode" className="col-form-label pl-0 text-left" lg={6}>Zipcode*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="months" className="col-form-label pl-0 text-left" lg={6}>Months*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="cardType" className="col-form-label pl-0 text-left" lg={6}>Card Type*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="cardNum" className="col-form-label pl-0 text-left" lg={6}>Card Num*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="expireDate" className="col-form-label pl-0 text-left" lg={6}>Card Expires*</Label>
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
                                        <Col lg={6}>
                                            <Label htmlFor="securityCode" className="col-form-label pl-0 text-left" lg={6}>SecurityNum*</Label>
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
                                            <Button className="btn mx-auto submitBtn subBtn w-50" onClick={() => this.toggleModal()}>Submit</Button>
                                    </Row>
                                </LocalForm>
                            </Roll>
                            <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                                <ModalHeader>Thank You For Subscribing!</ModalHeader>
                                <ModalBody>An member from Swift Foods will review your submittion shortly, expect a response within the next 72 hours. </ModalBody>
                                <ModalFooter>
                                    <Button className="submitBtn" onClick={() => this.toggleModal()}>Close</Button>
                                </ModalFooter>
                            </Modal>
                    </div>
                </div>

            );
        }

    }


}

export default SubscribeForm;