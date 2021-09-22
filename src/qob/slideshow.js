import shavixel from "../icons/shavixel.jpg";
import lurjixel from "../icons/lurjixel.jpg";
//var React = require('react');
//var ReactDOM = require('react-dom');
//var Carousel = require('react-responsive-carousel').Carousel;
import React, { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import './slideshou.css';

export default class DemoCarousel extends React.Component {
//var DemoCarousel = React.CreateClass({
    render() {
        return (
          <Fragment>
            <Carousel showArrows={true} className="container"/* onClickItem={onClickItem} onClickThumb={onClickThumb}*/>
                <div className="legenddiv">
                    {/* <img src={shavixel} /> */}
                    <p className="legend">Legend 1</p>
                </div>
                <div className="legenddiv">
                    {/* */}
                    <p className="legend">Legend 2</p>
                </div>
                <div className="legenddiv">
                    {/* <img src="assets/3.jpeg" /> */}
                    <p className="legend">Legend 3</p>
                </div>
                </Carousel>
                <Carousel>
                <img src={shavixel} />
                <img src={lurjixel} /> 
                </Carousel>
          </Fragment>
        );
    }
};
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));