import React, { Fragment } from 'react';
import './About.scss';

const About = (props) => {
        return(
            <Fragment>
                     <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="text-center mt-5 mb-5">About Us!</h3>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row row-content align-items-center">
                            <div class="col-6 ">
                                <h4 class="font-weight-bold">Our Mission</h4>
                            </div>
                            <div class="col text-left ">
                                <p class="w-55 ml-auto">We strive to keep our customers fed with little to no effort. if you are not satisfied with our product, we will refund your money!</p>
                            </div>
                        </div>
                        <div class="row row-content align-items-center">
                            <div class="col text-left">
                                <p class="w-55 mr-auto">Here at Swift Foods, we provide the highest quality food. Our food contains less sugar, less processes, and more nutrients that is ready in three minutes!</p>
                            </div>
                            <div class="col-6 text-right">
                                <h4 class="font-weight-bold">Our Food</h4>
                            </div>
                        </div>
                        <div class="row row-content align-items-center">
                            <div class="col-6">
                                <h4 class="font-weight-bold">Why Swift Foods?</h4>
                            </div>
                            <div class="col text-left">
                                <p class=" w-55 ml-auto ">When it comes time to eat, you have many options. Foods offer convenience, nutrition, and cravings. At Swift Foods, we offer all three for a prive you cannot beat!</p>
                            </div>
                        </div>
                    </div>
                    
            </Fragment>
        );
};

export default About;