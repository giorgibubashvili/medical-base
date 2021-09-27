import React, { Fragment } from "react";
import './body.css';
import Menu from "./menu";
import Produkt from "./produkt";
import DemoCarousel from "./slideshow";

export default class Body extends React.Component {
    render() {

        return (
            <Fragment>
                <div className="body">
                    <Menu />
                    
                    <div className="body_div">
                        <DemoCarousel />
                        <Produkt />
                    </div>
                </div>
            </Fragment>
        )
    }
}