import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import Footer from '../Footer/Footer';
import Order from '../Order/Order';
import Cart from '../Cart/Cart';
import {Switch, Route, Redirect} from 'react-router-dom';
import {
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
  FormGroup,
  Form,
  Input,
  Col,
  Button,
  Label
} from 'reactstrap';
import Axios from 'axios';


class Layout extends Component{

    state = {
        Data: null,
        showModal: false,
        username: null,
        password: null,
        loggedIn: false,
        formValues: {
            pizzas: 0,
            salads: 0,
            burgers: 0
        }
    };

    componentDidMount(){
        this.getData().then(res => this.setState({Data: res.data}))
    }
        
    getData = async () => {
        const response = await fetch('/getData');
        const body = await response.json();
        return body;
        
    }
 
	addToCart = (food, number) => {
        
		if(food === "pizza"){
            this.setState((prevState, props) => ({
                ...prevState,
                formValues: {
                    ...prevState.formValues,
                    pizzas: prevState.formValues.pizzas + number
                }
            }));
        } else if(food === "salad"){
            this.setState((prevState, props) => ({
                ...prevState,
                formValues: {
                    ...prevState.formValues,
                    salads: prevState.formValues.salads + number
                }
            }));
        } else if(food === "burger"){
            this.setState((prevState, props) => ({
                ...prevState,
                formValues: {
                    ...prevState.formValues,
                    burgers: prevState.formValues.burgers + number
                }
            }));
        }
	}

    removeFromCart = (food, number) => {
        
		if(food === "pizza"){
            if(this.state.formValues.pizzas <= 0){
                this.setState((prevState) => ({
                    ...prevState,
                    formValues: {
                        ...prevState.formValues,
                        pizzas: 0
                    }
                }));
            }else{
                this.setState((prevState) => ({
                    ...prevState,
                    formValues: {
                        ...prevState.formValues,
                        pizzas: prevState.formValues.pizzas - number
                    }
                }));
            }
        } else if(food === "salad"){
            if(this.state.formValues.salads <= 0){
                this.setState((prevState) => ({
                    ...prevState,
                    formValues: {
                        ...prevState.formValues,
                        salads: 0
                    }
                }));
            }else{
                this.setState((prevState) => ({
                    ...prevState,
                    formValues: {
                        ...prevState.formValues,
                        salads: prevState.formValues.salads - number
                    }
                }));
            }
        } else if(food === "burger"){
            if(this.state.formValues.burgers <= 0){
                this.setState((prevState) => ({
                    ...prevState,
                    formValues: {
                        ...prevState.formValues,
                        burgers: 0
                    }
                }));
            }else{
                this.setState((prevState) => ({
                    ...prevState,
                    formValues: {
                        ...prevState.formValues,
                        burgers: prevState.formValues.burgers - number
                    }
                }));
            }
        }
	}

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    toggleLogin = () => {
        this.setState({loggedIn: !this.state.loggedIn})
    }

    loginUser = () => {
        Axios({
            method: "POST",
            data: {
              username: this.state.username,
              password: this.state.password,
            },
            withCredentials: true,
            url: "/login",
          }).then((res) => {
            console.log(res.data)
            if(res.data !== "No User Exists"){
                this.toggleLogin();
            }
          });
    }

    logoutUser = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/logout",
          }).then(res => console.log(res.data)).catch(err => console.log(err));
    }

    registerUser = () => {
        
        Axios({
            method: "POST",
            data: {
                username: this.state.username,
                password: this.state.password
            },
            withCredentials: true,
            url: '/register',
        }).then((res) => console.log(res.data)).catch(err => console.log(err));

        
    }

    render(){
        
        return(

            <Fragment>
                <Header toggleModal={this.toggleModal} logout={this.logoutUser} toggleLogin={this.toggleLogin} loginUser={this.loginUser} loggedIn={this.state.loggedIn}/>
                    <Switch>
                    
                        <Route exact path="/">
                            <Home data={this.state.Data} addToCart={this.addToCart}/>
                        </Route>

                        <Route path="/contact">
                            <Contact/>
                        </Route>

                        <Route path="/checkout">
                            <Order formValues={this.state.formValues} HandleBlur={this.addToCart} />
                        </Route>

                        <Route path="/cart">
                            <Cart formValues={this.state.formValues} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
                        </Route>

                        <Route path="/subscribe">
                            <SubscribeForm loggedIn={this.state.loggedIn} user={this.state.username}/>
                        </Route>

                        <Redirect to="/"/>
                    
                    </Switch>

                    <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                        <ModalHeader>Login/Register!</ModalHeader>
                        <ModalBody>
                            <Form className="my-auto pt-2 mx-auto">
                                <FormGroup row>
                                        <Label for="username pl-0 text-left" lg={4} xs={12} md={4}>Username:</Label>
                                        <Col  md={6} xs={{
                                            size: 10,
                                            offset: 1
                                        }}>
                                            <Input type="text" id="username" name="username" onChange={event => this.setState({username: event.target.value})} />
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                        <Label for="username" lg={4} md={4} xs={12}>Password:</Label>
                                        <Col  md={6} xs={{
                                            size: 10,
                                            offset: 1
                                        }}>
                                            <Input type="password" id="password" name="password" onChange={event => this.setState({password: event.target.value})} />
                                        </Col>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => {
                                this.toggleModal();
                                this.loginUser();
                            }} className="submitBtn">Login</Button>
                            <Button onClick={() => {
                                this.toggleModal();
                                this.registerUser();
                            }} className="submitBtn">Register</Button>
                        </ModalFooter>
                    </Modal>
                <Footer/>
            </Fragment>

        );

    }


}

export default Layout;