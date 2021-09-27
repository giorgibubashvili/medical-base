import React, { Fragment } from "react";
import "./proddet.css";
import shavixel from "../icons/shavixel.jpg";

export default class ProdDet extends React.Component {
    render() {
        let value = 1;
        const prod_raodenoba = () => {
            
            return value;
        }
        return (
            <Fragment>
                <div>
                    <h2>პროდუქტის აღწერა</h2>
                    <div className="prod_det_div">
                    < img className="prod_det_img" src={shavixel} alt="" />
                        <div className="prod_det_name">
                            <h2 >სამედიცინო ხელთათმანი შავი ფერის </h2>
                            <h3 className="fasi_aris">ლ8</h3>
                            <div className="product_raodenoba">
                                <button className="product_raodenoba_but">-</button>
                                <input className="product_raodenoba_in" ></input>
                                <button className="product_raodenoba_but">+</button>
                            </div>
                            <h3 className="prod_det_button" onClick={prod_raodenoba}>კალათაში დამატება</h3>
                        </div>
                    </div>
                    <h3>აღწერა:</h3>
                </div> 
            </Fragment>
        )
    }
}