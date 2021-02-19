import React, { Fragment } from 'react';
import './Home.scss';
import Shop from '../Shop/Shop';
import About from '../About/About';


const home = (props) => {

  return (

      <Fragment>
        <div className="container w-75 pl-0 pr-0">
            <div className="row mt-4">
                    <div className="col-12 align-items-left">
                        <p class="h4 mb-4">
                            <span class="firstWord mr-2">Our</span>
                            special items
                        </p>
                    </div>
            </div>
        </div>
        <div className="container w-75 pl-0 pr-0">
            <Shop data={props.data}/>
        </div>
        <div className="container w-75 pl-0 pr-0">
            <div className="row mt-4">
                    <div className="col-12 align-items-left">
                        <p class="h4 mb-4">
                            <span class="firstWord mr-2">Why</span>
                            we are the best?
                        </p>
                    </div>
            </div>
        </div>
        <div className="container w-75 pl-0 pr-0">
            <About data={props.data}/>
        </div>
      </Fragment>

  );
};

export default home;
