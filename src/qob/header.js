import React, { Fragment } from "react";
import './header.css';
import { Link } from "@reach/router";
import searchicon from "../icons/searchicon.png";
//import lovicon from "../icons/lovicon.jpg";
import shopicon from "../icons/shopicon.png";

const Heder = (props) => {
 
    return (
        <Fragment>
            <div className="header">
                <div className="header_top">
                    <Link to="/" className="header_top_logo"><h1 >MEDICAL-BASE</h1></Link>
                    <Link to="/kontakt" className="kont_button"><h1 >კონტაქტი</h1></Link>  
                        {/* <div>
                            <button className="registr" >
                                <h3 className="registrh">რეგისტრაცია</h3>
                            </button>
                            <button className="avtoriz" >
                                <h3 className="avtorizh">ავტორიზაცია</h3>
                            </button>
                        </div> */}
                </div>
                <div className="header_down_div">
                    <div className="header_down">
                        <input className="header_input" placeholder="ძიება..."/>
                        <div className="header_serch">
                            <div className="div_search_icon">
                                <Link to="shop"> <img className="search_icon" src={searchicon} alt="" /> </Link>
                            </div>
                        </div>
                        <div className="container_shop_icon">
                            <div className="div_shop_icon">
                                <Link to="/shoppingcart" ><img className="shop_icon" src={shopicon} alt="" /></Link>     
                                <label className="shop_label">{props.onproduktcard}</label>
                            </div>
                        </div>
                        {/* <div className="container_lov_icon">
                            <div className="div_lov_icon">
                                <img className="lov_icon" src={lovicon} alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
    
}

export default Heder;