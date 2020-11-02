import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Shop from '../Shop/Shop';
import Contact from '../Contact/Contact';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import Footer from '../Footer/Footer';
import Order from '../Order/Order';
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




class Layout extends Component{

    state = {
        Data: null,
        showModal: false
    };

    componentDidMount(){
        this.getData().then(res => this.setState({Data: res.data}))
    }

    getData = async () => {
        const response = await fetch('/getData');
        const body = await response.json();
        return body;
        
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render(){
        
        return(

            <Fragment>
                <Header toggleModal={this.toggleModal}/>
                
            
                
                    <Switch>
                    
                        <Route exact path="/">
                            <Home data={this.state.Data}/>
                        </Route>

                        <Route path="/about">
                            <About data={this.state.Data}/>
                        </Route>

                        <Route path="/shop">
                            <Shop data={this.state.Data}/>
                        </Route>

                        <Route path="/contact">
                            <Contact/>
                        </Route>

                        <Route path="/order">
                            <Order/>
                        </Route>

                        <Route path="/subscribe">
                            <SubscribeForm/>
                        </Route>

                        <Route  path="/SwiftFoods-React">
                            <Home data={this.state.Data}/>
                        </Route>

                        <Redirect to="/"/>
                    
                    </Switch>

                    <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                        <ModalHeader>Login/Register!</ModalHeader>
                        <ModalBody>
                            <Form className="my-auto pt-2">
                                <FormGroup row>
                                        <Label for="username" lg={4} xs={12} md={4} className="">Username:</Label>
                                        <Col  md={6} xs={{
                                            size: 10,
                                            offset: 1
                                        }}>
                                            <Input type="text" id="username" name="username" className="" />
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                        <Label for="username" lg={4} md={4} xs={12} className="">Password:</Label>
                                        <Col  md={6} xs={{
                                            size: 10,
                                            offset: 1
                                        }}>
                                            <Input type="password" id="password" name="password" className="" />
                                        </Col>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => this.toggleModal()}>Login</Button>
                            <Button onClick={() => this.toggleModal()}>Register</Button>
                        </ModalFooter>
                    </Modal>
                
              

                <Footer/>
            </Fragment>

        );

    }


}

export default Layout;