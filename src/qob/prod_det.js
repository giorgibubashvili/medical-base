import React, { Fragment } from "react";
import "./proddet.css";
import DemoCarouselDet from "./slideshou_det";

const ProdDet = (props) => {
    
    return (
        <Fragment>
            <div>
                <h2>პროდუქტის აღწერა</h2>
                <div className="prod_det_div">
                    <DemoCarouselDet />
                    <div className="prod_det_name">
                        <h2 >nam </h2>
                        <h3 className="fasi_aris">ლ{5}</h3>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in" ></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <h3 className="prod_det_button" >კალათაში დამატება</h3>
                    </div>
                </div>
                <h3>აღწერა: kom</h3>
            </div> 
        </Fragment>
    )
   
}

export default ProdDet;