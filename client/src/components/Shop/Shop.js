import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import {Link} from 'react-router-dom';
import './Shop.scss';


const Shop = (props) => {

    return(

        <Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-center mt-5 mb-5">Shop!</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="mx-auto mb-4 shopCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/peppizza.jpg'} alt="pepperoni pizza" />
                        <CardBody className="text-center">
                            <CardTitle tag="h5">
                                Pizza
                            </CardTitle>
                            <CardText className="text-left">
                                Italian pizza made with homemade tomato sauce, fresh american white cheese, and topped with pepperonis
                            </CardText>
                            <CardText>
                                $6.99
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
                            <CardTitle tag="h5">Salad</CardTitle>
                            <CardText className="text-left">Freshly cut lettuce topped with home grown tomatos, garden fresh carrots, and our signature ranch dressing.</CardText>
                            <CardText >$4.99</CardText>
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
                            <CardTitle tag="h5">Burger</CardTitle>
                            <CardText className="text-left">Mouth drooling angus burger on two buns topped with fresh lettuce, tomato, ketchup and onions.</CardText>
                            <CardText >$8.99</CardText>
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