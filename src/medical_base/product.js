import React, { Fragment, useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import api from "../server_api/api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

// import { useState } from "react/cjs/react.production.min";
//import api from "../server_api/api";
//import Proddet from "./proddet";

const Product = (props) => {
    // console.log(props)

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
        // <Link to={`/product/${props.value.id}`} key={"image"+ind}>
            <img className="imagedet" src={idi.img} alt="" id={idi.id}/> 
        // </Link>
     
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
    // document.getElementById(props.value.id).value = Math.abs(Math.round(document.getElementById(props.value.id).value)) ;
    //         if(document.getElementById(props.value.id).value === "0"){
    //             document.getElementById(props.value.id).value = "1";
    //         }
    setquantity(v.target.value);
}    

const plus = () => {
    document.getElementById(props.value.id+"input_id").value ++;
    setquantity(document.getElementById(props.value.id+"input_id").value);
    console.log(document.getElementById(props.value.id+"input_id").value);
}

const minus = () => {
    if(document.getElementById(props.value.id+"input_id").value > 1){
        document.getElementById(props.value.id+"input_id").value --;
        setquantity(document.getElementById(props.value.id+"input_id").value);
    }
    
}

    return(
        <Fragment>
               <div className="product">
                {/* <Link  className="image"/> */}
                <Link to={`/product/${props.value.id}`}>
                <Carousel className="imagedett" autoPlay="true" infiniteLoop="true" >
                        {Potos}
                </Carousel>
                </Link> 
                {/* <img src={props.value.images[0].img} alt="" /> */}
                <Link to={`/product/${props.value.id}`} style={{textDecoration:"none",color:"black "}}><div className="title" style={{height:"40px"}}>{props.value.title} {props.value.size} {props.value.color}</div></Link>
                <div>ფასი: {props.value.price} &#8382;</div>
                <div className="increm_input">
                    <div onClick={minus} className="increm">-</div>
                    <input className="input"  defaultValue={1} onChange={inp} id={props.value.id+"input_id"} />
                    <div onClick={plus} className="increm">+</div>
                </div>
                
                <div className="newcourier" onClick={shop}>დაამატე კალათაში</div>
            </div> 
        </Fragment>
    )
}

export default Product;