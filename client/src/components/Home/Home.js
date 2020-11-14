import React, { Fragment } from 'react';
import {
  Card, CardImg, CardBody, Spinner
} from 'reactstrap';
import './Home.scss';
import Fade from 'react-reveal/Fade';

const home = (props) => {

  return (

      <Fragment>
        <div className="container">
            <div className="row">
                <Fade top>
                    <div className="col-12">
                        <h3 class="text-center mt-5 mb-5">How We Work!</h3>
                    </div>
                </Fade>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/chooseyourmeal.jpg'} alt="Choose your meal" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">
                                {props.data ? props.data.home.title1 : <Spinner color="#574AE2"/>}
                            </h5>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/wedeliver.jpg'} alt="We deliver" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">
                                {props.data ? props.data.home.title2 : <Spinner color="#574AE2"/>}
                            </h5>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/heatthemup.jpg'} alt="Heat them up" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">
                                {props.data ? props.data.home.title3 : <Spinner color="#574AE2"/>}
                            </h5>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/eatit.jpg'} alt="eat it" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">
                                {props.data ? props.data.home.title4 : <Spinner color="#574AE2"/>}
                            </h5>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        
        
      </Fragment>

  );
};

export default home;
