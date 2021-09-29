import shavixel from "../icons/shavixel.jpg";
import lurjixel from "../icons/lurjixel.jpg";
import lovicon from "../icons/lovicon.jpg";
import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './slideshou_det.css';

export default class DemoCarouselDet extends React.Component {
    
    render() {
        return (
          <Fragment>
                <Carousel  className="slide_det" >
                  {/* infiniteLoop="true" autoPlay="true" autoPlayHoverPause="true" */}
                  
                    <img className="sldetimg" src={shavixel} alt="" />
                    <img className="sldetimg" src={lurjixel} alt="" />
                    <img className="sldetimg" src={lovicon} alt="" />
                </Carousel>
                {/* <div className="container">
                    
                </div> */}

          </Fragment>
        );
    }
};
