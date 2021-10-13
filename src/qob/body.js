import React, { Fragment } from "react";
import './body.css';
import Menu from "./menu";
import Produkt from "./produkt";
import DemoCarousel from "./slideshow";

const Body = (props) => {

    const product = props.onprod.map((key) => {
        return(
            <Produkt onprod={key} onaddproduktcart={props.onaddCartProdukt} />
        )
    });

    return (
        <Fragment>
            <div className="body">
                <Menu />        
                <div className="body_div">
                    <DemoCarousel />
                    <div className="produqcia_p">
                        <h3 >პროდუქცია</h3>
                    </div>
                    <div className="produkt_container">
                         {product}
                    </div>
                </div>
            </div>
        </Fragment>
    )
   
}
export default Body;