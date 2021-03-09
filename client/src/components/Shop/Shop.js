import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Spinner
  } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import './Shop.scss';


const Shop = (props) => {
   
    return(

        <Fragment>
            <div className="row mt-2">
                <div className="col-12 col-md-6 col-lg-4">
                    <Zoom left>
                        <Card className="mx-auto mb-4 shopCard border-0">
                            <CardImg className="rounded-circle" top width="100%" src={process.env.PUBLIC_URL + '/assets/images/peppizza.jpg'} alt="pepperoni pizza" />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">
                                    {props.data ? props.data.pizza.title : <Spinner color="#574AE2"/>}
                                </CardTitle>
                                <CardText className="text-left">
                                {props.data ? props.data.pizza.description : <Spinner color="#574AE2" className="mx-auto"/>}
                                </CardText>
                                <CardText>
                                    {props.data ? props.data.pizza.price.$numberDecimal : <Spinner color="#574AE2"/>}
                                </CardText>
                                <Button className="orderBtn"
                                        onClick={() => props.addToCart("pizza", 1)}>
                                    Add to cart
                                </Button>
                            </CardBody>
                        </Card>
                    </Zoom>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Zoom clear>
                        <Card className="mx-auto shopCard mb-4 border-0 mt-4 mt-md-0">
                            <CardImg className="rounded-circle" top width="100%" src={process.env.PUBLIC_URL + '/assets/images/salad.jpg'} alt="salad" />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">
                                    {props.data ? props.data.salad.title : <Spinner color="#574AE2"/>}
                                </CardTitle>
                                <CardText className="text-left">
                                    {props.data ? props.data.salad.description : <Spinner color="#574AE2"/>}
                                </CardText>
                                <CardText >
                                    {props.data ? props.data.salad.price.$numberDecimal : <Spinner color="#574AE2"/>}
                                </CardText>
                                <Button className="orderBtn"
                                        onClick={() => props.addToCart("salads", 1)}>
                                    Add to cart
                                </Button>
                            </CardBody>
                        </Card>
                    </Zoom>
                </div>
                <div className="col-12 col-md-6-offset-2 col-lg-4">
                    <Zoom right>
                        <Card className="mx-auto shopCard mb-4 border-0 mt-4 mt-md-0">
                            <CardImg className="rounded-circle" top width="100%" src={process.env.PUBLIC_URL + '/assets/images/burger.jpg'} alt="burger" />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">
                                    {props.data ? props.data.burger.title : <Spinner color="#574AE2"/>}
                                </CardTitle>
                                <CardText className="text-left">
                                    {props.data ? props.data.burger.description : <Spinner color="#574AE2"/>}
                                </CardText>
                                <CardText >
                                    {props.data ? props.data.burger.price.$numberDecimal : <Spinner color="#574AE2"/>}
                                </CardText>
                                <Button className="orderBtn"
                                        onClick={() => props.addToCart("burgers", 1)}>
                                    Add to cart
                                </Button>
                            </CardBody>
                        </Card>
                    </Zoom>
                </div>
            </div>
           
        </Fragment>

    );

};

export default Shop;