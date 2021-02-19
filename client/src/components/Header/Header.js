import React, { Fragment } from 'react';
import Navigation from './Navbar/Navbar';
import {Link} from 'react-router-dom';
import './Header.scss';


const header = (props) => {

    return(

        <Fragment>
            <Navigation toggleModal={props.toggleModal} logout={props.logout} loginUser={props.loginUser} toggleLogin={props.toggleLogin} loggedIn={props.loggedIn}/>
            <header className="jumbotron ml-auto mr-auto mb-4 mt-2 w-75">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xs-12 col-md-7 text-center align-self-center">
                            <p class="h3">Order food anytime and anywhere.</p>
                            <p class="h6">Our delicious food is waiting for you!</p>
                            <Link className="btn btn-large btn-primary mt-2 subscribe mb-2" data-toggle="#" data-target="#" to="/subscribe">Subscribe</Link>
                        </div>
                        <div className="col-xs-12 col-md-5 text-center align-self-center">
                            <img class="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/foodtruck.png'} alt="food truck"/>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>

    );

};

export default header;