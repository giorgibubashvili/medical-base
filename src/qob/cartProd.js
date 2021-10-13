import React from "react";
import shavixel from "../icons/shavixel.jpg";
import { useState } from "react";

const Cartprod = (props) => {
const [fasia, setfasia] = useState(props.onkey.prod.fasi);
const [raod, setraod] = useState([props.onkey.raode]);
let fasi = props.onkey.prod.fasi;

const rd = (val) => {
    setraod(val.target.value);
    raodenoba(val.target.value);
}
const mn = () => {
    if(document.getElementById(props.onkey.prod.id).value > 1){
        setraod(--document.getElementById(props.onkey.prod.id).value); 
        raodenoba(document.getElementById(props.onkey.prod.id).value);
    }    
}
const pl = () => { 
    setraod(++document.getElementById(props.onkey.prod.id).value);
    raodenoba(document.getElementById(props.onkey.prod.id).value); 
}

const raodenoba = (raod) => {
        
    if(raod >= props.onkey.prod.sale6min && raod <= props.onkey.prod.sale6max)
    {
        fasi = fasi - (fasi * props.onkey.prod.sale6pr /100);
    }

    if(raod >= props.onkey.prod.sale5min && raod <= props.onkey.prod.sale5max)
    {
        fasi = fasi - (fasi * props.onkey.prod.sale5pr /100);
    }

    if(raod >= props.onkey.prod.sale4min && raod <= props.onkey.prod.sale4max)
    {
        fasi = fasi - (fasi * props.onkey.prod.sale4pr /100);
    }

    if(raod >= props.onkey.prod.sale3min && raod <= props.onkey.prod.sale3max)
    {
        fasi = fasi - (fasi * props.onkey.prod.sale3pr /100);
    }

    if(raod >= props.onkey.prod.sale2min && raod <= props.onkey.prod.sale2max)
    {
        fasi = fasi - (fasi * props.onkey.prod.sale2pr /100);
    }

    if(raod >= props.onkey.prod.sale1min && raod <= props.onkey.prod.sale1max)
    {
        fasi = fasi - (fasi * props.onkey.prod.sale1pr /100);
    }
    setfasia(fasi);
    props.onaddCartProdukt(props.onkey.prod, raod - props.onkey.raode, fasi);
}

    return(
        <tr >
            <td>< img className="cart_img" src={shavixel} alt="" /></td>
            <td> <h3 className="cart_product_name"> {props.onkey.prod.name}</h3> </td>
            <td>
                <div className="cart_raod">
                    <div><h2 onClick={mn} >-</h2></div>
                    <div><input onChange={rd} id={props.onkey.prod.id} value={raod}/></div>
                    <div><h2 onClick={pl} >+</h2></div>
                </div>
            </td>
            <td>
                <h3 >{fasia}</h3>
            </td>
            <td>
                <h3 >{raod * fasia}</h3>
            </td>
            <td>
                <h1>X</h1>
            </td>
        </tr>
    )
}

export default Cartprod;