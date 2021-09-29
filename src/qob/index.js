import React, { Fragment } from "react";
import Header from "./header.js"
import Body from "./body.js"
import Footer from "./footer.js";
import Kontakt from "./kontakt";
import { Router } from "@reach/router";
import ProdDet from "./prod_det.js";
import ShoppingCart from "./shoppingcart.js";

export default class Qob extends React.Component {



    render() {

        return (
            <Fragment>
                <Header path="/" />
                <Router>
                    <ShoppingCart path="/shoppingcart" />
                    <Kontakt path="/kontakt" />
                    <Body path="/" />
                    <ProdDet path="/produkt" />
                </Router>
                
                <Footer /> 
            </Fragment>
        )
    }
}