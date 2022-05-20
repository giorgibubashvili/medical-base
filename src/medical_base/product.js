import React, { Fragment, useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import api from "../server_api/api";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// import { useState } from "react/cjs/react.production.min";
//import api from "../server_api/api";
//import Proddet from "./proddet";

const Product = (props) => {

    const [quantity, setquantity] = useState([1]);
   // const setid = () =>{
        // const prodid = async () => {
        //    // const resp = await api.get("/product/"+props.value.id);
        //     //props.onsetid(props.value.id);
            
        // }
   //     props.onsetid(props.value.id);
   // };
// console.log(props);
// const get_data = async () => {
//     const response = await api.get(`/product/${props.value.id}`);
//     console.log(response);
    //props.onsetproduct(response.data);
// }; 



const Potos = props.value.images.map((idi, ind) => {
    // console.log(idi.img);
    // setprice_id(id i.id);
    // price_id = idi.id;
    return(
        <Link to={`/product/${props.value.id}`} key={ind}>
            <img className="imagedet" src={"data:image/png;base64,"+idi.img} alt="" id={idi.id}/> 
        </Link>
     
    )
}) 

const shop = async () => {
    // console.log(localStorage.getItem("basket_id"));
    
    let basket_title = "None";
    if(!localStorage.getItem("basket_title")){
        basket_title = "None";
    }else{
        basket_title = localStorage.getItem("basket_title");
    }
    // console.log(id);
    await api.post("/basket/"+basket_title, {"product_id": props.value.id, "quantity": quantity})
    .then(response => {
        // console.log(response.data);
        localStorage.setItem("basket_title", response.data.basket.title);
    })
    .catch(error => {
        // console.log(error.response);
    }); 
    props.shop_cnt();
}

const inp = (v) =>{
    document.getElementById(props.value.id).value = Math.abs(Math.round(document.getElementById(props.value.id).value)) ;
            if(document.getElementById(props.value.id).value === "0"){
                document.getElementById(props.value.id).value = "1";
            }
    setquantity(v.target.value);
}    
    return(
        <Fragment>
               <div className="product">
                {/* <Link  className="image"/> */}
                <Fade className="imagedett" >
                    {/* <Link to={`/product/${props.value.id}`}> */}
                        {Potos}
                    {/* </Link>   */}
                </Fade>
                
                <Link to={`/product/${props.value.id}`} style={{textDecoration:"none", color:"black"}}><div style={{height:"40px"}}>{props.value.title} {props.value.size} {props.value.color}</div></Link>
                <div>ფასი: {props.value.price} &#8382;</div>
                <input className="inpu" type="number" defaultValue={1} onChange={inp} id={props.value.id} />
                <div className="newcourier" onClick={shop}>დაამატე კალათაში</div>
            </div> 
        </Fragment>
    )
}

export default Product;