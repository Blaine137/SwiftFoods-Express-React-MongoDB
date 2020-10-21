import React, { Fragment, useState } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button, Label, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Contact.scss';


const required = val => val && val.length; //if val is not undefined and if the length is greater than zero
const maxLength = len => val => !val || (val.length <= len); 
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const handleSubmit = (event) => {

    alert('Thank you for submitting the form');
    // event.preventDefault();
};

const Contact = (props) => {

    const [showModal, toggleModal] = useState(false);

    return(

        <Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-center mt-5 mb-5">Contact Us!</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <LocalForm className="mx-auto mb-5 p-4 col-10" onSubmit={handleSubmit} >
                        <Row className="form-group">
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
                        <Row className="form-group">
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
                            <Label htmlFor="phoneNum" className="col-form-label" lg={2}>Phone Num*</Label>
                            <Col lg={4}>
                                <Control.text
                                        model=".phoneNum" 
                                        className="form-control" 
                                        name="phoneNum" 
                                        id="phoneNum" 
                                        required 
                                        placeholder="Enter Your phone number"
                                        validators={{
                                            required,
                                            isNumber
                                        }}/>
                                <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number'
                                        }}/>
                            </Col>
                            <Label htmlFor="comments" className="col-form-label" lg={2}>comments*</Label>
                            <Col>
                                <Control.textarea
                                        model=".comments" 
                                        className="form-control w-100" 
                                        name="comments" 
                                        id="comments"
                                        rows="3" 
                                        required 
                                        placeholder="Enter Your comments"
                                        validators={{
                                            required
                                        }}/>
                                <Errors
                                        className="text-danger"
                                        model=".comments"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group mt-4">
                            <Button className="btn mx-auto submitBtn subBtn" onClick={() => toggleModal(!showModal)}>Submit</Button>
                        </Row>
                    </LocalForm>
                    <Modal isOpen={showModal} toggle={toggleModal}>
                        <ModalHeader>Thank You For Contacting Us!</ModalHeader>
                        <ModalBody>An member from Swift Foods will review your submittion shortly, expect a response within the next 72 hours. </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => toggleModal(!showModal)}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </Fragment>
    );

};

export default Contact;