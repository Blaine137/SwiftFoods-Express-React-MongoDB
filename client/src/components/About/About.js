import React, { Fragment } from 'react';
import {Spinner} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './About.scss';

const About = (props) => {
        return(
            <Fragment>
                     <div class="container">
                        <div class="row">
                            <Fade top>
                                <div class="col-12">
                                    <h3 class="text-center mt-5 mb-5">About Us!</h3>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row row-content align-items-center">
                            <Slide top>
                                <div class="col-6 ">
                                    <h4 class="font-weight-bold">
                                        {props.data ? props.data.about.title1 : <Spinner color="#574AE2"/> }
                                    </h4>
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div class="col text-left ">
                                    <p class="w-55 ml-auto">
                                        {props.data ? props.data.about.p1 : <Spinner color="#574AE2"/> }
                                    </p>
                                </div>
                            </Slide>
                        </div>
                        <div class="row row-content align-items-center">
                            <Slide top>
                                <div class="col text-left">
                                    <p class="w-55 mr-auto">
                                        {props.data ? props.data.about.p2 : <Spinner color="#574AE2"/> }
                                    </p>
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div class="col-6 text-right">
                                    <h4 class="font-weight-bold">
                                        {props.data ? props.data.about.title2 : <Spinner color="#574AE2"/> }
                                    </h4>
                                </div>
                            </Slide>
                        </div>
                        <div class="row row-content align-items-center">
                            <Slide top>
                                <div class="col-6">
                                    <h4 class="font-weight-bold">
                                        {props.data ? props.data.about.title3 : <Spinner color="#574AE2"/> }
                                    </h4>
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div class="col text-left">
                                    <p class=" w-55 ml-auto ">
                                        {props.data ? props.data.about.p3 : <Spinner color="#574AE2"/> }
                                    </p>
                                </div>
                            </Slide>
                        </div>
                    </div>
                    
            </Fragment>
        );
};

export default About;