import React, {Fragment, useState} from "react";
import './produkt.css';
import lurjixel  from "../icons/lurjixel.jpg";
import { Link } from "@reach/router";
import shopicon from "../icons/shopicon.png";

const Produkt = (props) => {
   
    let raode = 1;
    let fasi = props.onprod.fasi;
    let prc;
    const [fasia, setfasia] = useState(props.onprod.fasi);
    const [prca, setprca] = useState();
    const [rao, setrao] = useState(1);

    const pl = () => {
        ++document.getElementById(props.onprod.id).value;
        raodenoba(document.getElementById(props.onprod.id).value);
    } 

    const mn = () => {
        if(document.getElementById(props.onprod.id).value > 1)
        --document.getElementById(props.onprod.id).value;
        raodenoba(document.getElementById(props.onprod.id).value);
    } 

    const rd = (val) => {
        raodenoba(val.target.value)
    }

    const raodenoba = (raod) => {
        
        raode = raod;
        if(raode >= props.onprod.sale6min && raode <= props.onprod.sale6max)
        {
            fasi = fasi - (fasi * props.onprod.sale6pr /100);
            prc = props.onprod.sale6pr;
        }

        if(raode >= props.onprod.sale5min && raode <= props.onprod.sale5max)
        {
            fasi = fasi - (fasi * props.onprod.sale5pr /100);
            prc = props.onprod.sale5pr;
        }

        if(raode >= props.onprod.sale4min && raode <= props.onprod.sale4max)
        {
            fasi = fasi - (fasi * props.onprod.sale4pr /100);
            prc = props.onprod.sale4pr;
        }

        if(raode >= props.onprod.sale3min && raode <= props.onprod.sale3max)
        {
            fasi = fasi - (fasi * props.onprod.sale3pr /100);
            prc = props.onprod.sale3pr;
        }

        if(raode >= props.onprod.sale2min && raode <= props.onprod.sale2max)
        {
            fasi = fasi - (fasi * props.onprod.sale2pr /100);
            prc = props.onprod.sale2pr;
        }

        if(raode >= props.onprod.sale1min && raode <= props.onprod.sale1max)
        {
            fasi = fasi - (fasi * props.onprod.sale1pr /100);
            prc = props.onprod.sale1pr;
        }
        setfasia(fasi);
        setprca(prc);
        setrao(raode);
    }

    const addcart = () => {
        props.onaddproduktcart(props.onprod, Number(rao), fasia);
    }

    return(
        
        <Fragment>

             <div className="produkt">
                <div className="product">
                    <Link to="/produkt" >< img className="product_img" src={lurjixel} alt=""/></Link> 
                    <div className="producticon">
                        <img className="shopicon" src={shopicon} alt="" onClick={addcart}/>
                        <label className="product_pr">{prca}%</label>
                    </div> 
                </div>
                <Link to="/produkt" className="product_name"><h2 >{props.onprod.name}</h2> </Link>
                <div className="product_raodenoba">
                    <button className="product_raodenoba_but" onClick={mn}>-</button>
                    <input className="product_raodenoba_in" onChange={rd} id={props.onprod.id} defaultValue={1}></input>
                    <button className="product_raodenoba_but" onClick={pl}>+</button>
                </div>
                <div className="product_fasi">
                    <h3 className="jami">ჯამი</h3>
                    <h3 className="jami">ლ{rao * fasia}</h3>
                    <h3 className="jami">ფასი</h3>
                    <h3 className="jami">ლ{fasia}</h3>
                </div>
                <div  className="prod_button" onClick={addcart}><h3>კალათაში დამატება</h3></div>
             </div>
                    
                     
        </Fragment>
    );

}

export default Produkt;