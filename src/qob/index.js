import React, { Fragment } from "react";
import Header from "./header.js"
import Body from "./body.js"
import Footer from "./footer.js";

export default class Qob extends React.Component {
    render() {

        return (
            <Fragment>
                <Header />
                <Body />
                <Footer />
            </Fragment>
        )
    }
}