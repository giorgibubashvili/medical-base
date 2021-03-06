import React, { Fragment } from "react";
import './footer.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import fbicon from "../icons/fbicon.jpg";
import smartphone from "../icons/smartphone.svg";
import caaash from "../icons/caaash.png";
// import visaicon from "../icons/visaicon.png";
// import mastercardicon from "../icons/mastercardicon.png";
// import bogicon from "../icons/bogicon.png";

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="logo">
                    <h2>MEDICAL-BASE</h2>
                    <div className="div_fbicon">
                    <Route>
                        <Link to={{ pathname: "https://www.facebook.com/GeorgianMedicalbase/" }} target="_blank" >
                            <img className="fbicon" src={fbicon} alt="" ></img>
                        </Link>
                    </Route>
                    </div>
                </div> 
                 <div className="pay">
                    <h3>გადახდის მეთოდები</h3>
                    <div className="pay_icon">
                        {/* <img className="visaicon" src={visaicon} alt=""></img>
                        <img className="mastercardicon" src={mastercardicon} alt=""></img>
                        <img className="bogicon" src={bogicon} alt=""></img> */}
                        <img className="bogicon" src={caaash} alt=""></img>
                        <img className="bogicon" src={smartphone} alt=""></img>
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

export default Footer;