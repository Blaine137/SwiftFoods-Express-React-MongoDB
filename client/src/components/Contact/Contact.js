import React, { Fragment, useState } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button, Label, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Roll from 'react-reveal/Roll';
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
            <div className="container w-75 pl-0 pr-0">
                <div className="row mt-5">
                        <div className="col-12 align-items-left">
                            <p className="h4 mb-2">
                                <span class="firstWord mr-2">Contact</span>
                                us
                            </p>
                        </div>
                </div>
            </div>
            <div className="container w-75">
                <div className="row">
                    <Roll left>
                        <LocalForm className="mx-auto mb-5 p-4 col-10" onSubmit={handleSubmit} >
                            <Row className="form-group">
                                <Col  lg={6}>
                                    <Label htmlFor="fName" className="col-form-label pl-0 text-left" lg={6}>First Name*</Label>
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
                            <Row className="form-group">
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
                                    <Label htmlFor="phoneNum" className="col-form-label pl-0 text-left" lg={6}>Phone Num*</Label>
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
                                <Col>
                                    <Label htmlFor="comments" className="col-form-label pl-0 text-left" lg={2}>comments*</Label>
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
                                <Button className="btn mx-auto submitBtn w-50" onClick={() => toggleModal(!showModal)}>Submit</Button>
                            </Row>
                        </LocalForm>
                    </Roll>
                    <Modal isOpen={showModal} toggle={toggleModal}>
                        <ModalHeader>Thank You For Contacting Us!</ModalHeader>
                        <ModalBody>An member from Swift Foods will review your submittion shortly, expect a response within the next 72 hours. </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => toggleModal(!showModal)} className="submitBtn">Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </Fragment>
    );

};

export default Contact;