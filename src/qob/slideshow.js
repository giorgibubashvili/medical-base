import shavixel from "../icons/shavixel.jpg";
import lurjixel from "../icons/lurjixel.jpg";
import lovicon from "../icons/lovicon.jpg";
import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './slideshou.css';

const DemoCarousel = () => {
    
    return (
          <Fragment>
                <Carousel  className="slide"  infiniteLoop="true" autoPlay="true" autoPlayHoverPause="true" >
                    <img className="slimg" src={shavixel} alt="" />
                    <img className="slimg" src={lurjixel} alt="" />
                    <img className="slimg" src={lovicon} alt="" />
                </Carousel>
                {/* <div className="container">
                    
                </div> */}

          </Fragment>
    );
};

export default DemoCarousel;