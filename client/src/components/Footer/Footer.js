import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {NavLink, Link} from 'react-router-dom';

const footer = (props) => {

    return(

            <footer className="site-footer mt-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 col-sm-2 offset-1">
                            <h4 className="footerH4">Links</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink exact to="/" activeClassName="active-footer-link">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" activeClassName="active-footer-link">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop" activeClassName="active-footer-link">Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/contact" activeClassName="active-footer-link">Contact</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="col-6 col-sm-5 text-center">
                            <Link className="btn btn-large btn-primary mt-4 subscribeBtn" data-toggle="#" data-target="#" to="/subscribe">Subscribe</Link>
                        </div>
                        <div className="col-sm-4 text-center contactInfo">
                            <a  role="button" href="tel:+12065551234" className="btn btn-link"><FontAwesomeIcon icon={faPhone}/> 1-770-678-9900</a><br/>
                            <a role="button" href="mailto:campsites@nucamp.co" className="btn btn-link"><FontAwesomeIcon icon={faEnvelope}/> foodnow@swiftfoods.com</a>
                        </div>
                    </div>
                </div>
            </footer>

    );

};

export default footer;