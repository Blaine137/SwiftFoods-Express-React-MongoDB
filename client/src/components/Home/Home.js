import React, { Fragment } from 'react';
import {
  Card, CardImg, CardBody
} from 'reactstrap';
import './Home.scss';

const home = (props) => {
    
  return (

      <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 class="text-center mt-5 mb-5">How We Work!</h3>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/chooseyourmeal.jpg'} alt="Choose your meal" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">Choose your meal!</h5>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/wedeliver.jpg'} alt="We deliver" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">We deliver!</h5>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/heatthemup.jpg'} alt="Heat them up" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">Heat them up!</h5>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <Card style={ {width: "18rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/eatit.jpg'} alt="eat it" className="card-img-top" style={ {height: "200px"} }/>
                        <CardBody>
                            <h5 className="text-center">Eat it!</h5>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        
        
      </Fragment>

  );
};

export default home;
