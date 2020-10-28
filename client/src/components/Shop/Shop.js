import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Spinner
  } from 'reactstrap';
import {Link} from 'react-router-dom';
import './Shop.scss';


const Shop = (props) => {
    props.data ? console.log(props.data) : console.log('hi')
    return(

        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center mt-5 mb-5">Shop!</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="mx-auto mb-4 shopCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/peppizza.jpg'} alt="pepperoni pizza" />
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
                            <Link to="/order">
                                <Button className="orderBtn">
                                    Order Now
                                </Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="mx-auto shopCard mb-4">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/salad.jpg'} alt="salad" />
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
                            <Link to="/order">
                                <Button className="orderBtn">
                                    Order Now
                                </Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6-offset-2 col-lg-4">
                    <Card className="mx-auto shopCard mb-4">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/burger.jpg'} alt="burger" />
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
                            <Link to="/order">
                                <Button className="orderBtn">
                                    Order Now
                                </Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
           
        </Fragment>

    );

};

export default Shop;