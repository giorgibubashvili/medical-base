import React, { Fragment } from "react";
import Header from "./header.js"
import Body from "./body.js"

export default class Qob extends React.Component {
    render() {

        return (
            <Fragment>
                <Header />
                <Body />
            </Fragment>
        )
    }
}