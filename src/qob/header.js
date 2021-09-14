import React, { Fragment } from "react";
import './header.css';
import searchicon from "../icons/searchicon.png";
import lovicon from "../icons/lovicon.jpg";
import shopicon from "../icons/shopicon.png";

export default class Heder extends React.Component {
    render() {

        return (
            <Fragment>
                <div className="header">
                    <div className="header_top">
                        <h1 className="header_top_logo">MEDICAL-BASE</h1>
                        <div>
                            <button className="registr" >
                                <h3 className="registrh">რეგისტრაცია</h3>
                            </button>
                            <button className="avtoriz" >
                                <h3 className="avtorizh">ავტორიზაცია</h3>
                            </button>
                        </div>
                    </div>
                    <div className="header_down">
                        <input className="header_input" placeholder="ძიება..."/>
                        <div className="header_serch">
                            <img className="search_icon" src={searchicon} alt="" /> 
                        </div>
                        <div>
                            <img className="shop_icon" src={shopicon} alt="" />
                        </div>
                        <div>
                            <img className="lov_icon" src={lovicon} alt="" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}