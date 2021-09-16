import React, { Fragment } from "react";
import Menu from "./menu";

export default class Body extends React.Component {
    render() {

        return (
            <Fragment>
                <div className="body">
                    <Menu />
                    <div className="slider">
                   
                    </div>
                </div>
            </Fragment>
        )
    }
}