import React, { Fragment } from "react";
import './footer.css';
import fbicon from "../icons/fbicon.png";
import visaicon from "../icons/visaicon.png";
import mastercardicon from "../icons/mastercardicon.png";
import bogicon from "../icons/bogicon.png";


export default class Footer extends React.Component {

    render() {

        return (
            
            <Fragment>
                <div className="footer">
                    <div className="logo">
                        <h2>MEDICAL-BASE</h2>
                        <div className="div_fbicon">
                            <img className="fbicon" src={fbicon} alt="" onClick="Clicfb"></img>
                        </div>
                    </div>
                    <div className="pay">
                        <h3>გადახდის მეთოდები</h3>
                        <div className="pay_icon">
                            <img className="visaicon" src={visaicon} alt=""></img>
                            <img className="mastercardicon" src={mastercardicon} alt=""></img>
                            <img className="bogicon" src={bogicon} alt=""></img>
                        </div>
                    </div>
                    <div className="kontakt">
                    <h3>კონტაქტი</h3>
                    <h3>+995 598 360 361</h3>
                    </div>
                </div>
            </Fragment>
        )
    }
}