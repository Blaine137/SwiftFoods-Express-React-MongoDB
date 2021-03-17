import React, { Fragment } from 'react';
import Slide from 'react-reveal/Slide';
import './About.scss';

const About = (props) => {
        return(
            <Fragment>
                    <div class="container">
                        <div class="row row-content align-items-start mt-4">
                            <div class="col-12 col-md-6 ">
                                <Slide top>
                                    <p className="mb-4 reason">
                                        You get to choose your meal.
                                    </p>
                                    <p className="mb-4 reason">
                                        We deliver to your house.
                                    </p>
                                    <p className="mb-4 reason">
                                        All you have to do is heat them up.
                                    </p>
                                    <p className="mb-4 reason">
                                        Eat food that is healthy for you.
                                    </p>
                                </Slide>
                            </div>
                            <div class="col-12 col-md-6 text-lg-right text-xs-center ">
                                <Slide bottom>
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/fooddata.webp'} alt="food truck"/>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    
            </Fragment>
        );
};

export default About;