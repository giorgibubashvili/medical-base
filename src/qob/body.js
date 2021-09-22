import React, { Fragment } from "react";
import './body.css';
import Menu from "./menu";
import Produkt from "./produkt";
//import Slideshow from "./slideshow";

export default class Body extends React.Component {
    
    render() {

        return (
            <Fragment>
                <div className="body">
                    <Menu />
                    {/* <Slideshow /> */}
                    <Produkt />
                </div>
            </Fragment>
        )
    }
}