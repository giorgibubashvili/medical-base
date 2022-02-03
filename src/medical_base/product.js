import React, { Fragment } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import api from "../server_api/api";
//import api from "../server_api/api";
//import Proddet from "./proddet";

const Product = (props) => {

   // const setid = () =>{
        // const prodid = async () => {
        //    // const resp = await api.get("/product/"+props.value.id);
        //     //props.onsetid(props.value.id);
            
        // }
   //     props.onsetid(props.value.id);
   // };
//console.log(props);
// const get_data = async () => {
//     const response = await api.get(`/product/${props.value.id}`);
//     console.log(response);
    //props.onsetproduct(response.data);
// }; 
const shop = async () => {
    console.log(localStorage.getItem("basket_id"));
    let id = 0;
    if(!localStorage.getItem("basket_id")){
        id = 0;
    }else{
        id = localStorage.getItem("basket_id");
    }
    console.log(id);
    await api.post("/basket/"+id, {"product_id": props.value.id, "quantity": 1})
    .then(response => {
        console.log(response.data);
        localStorage.setItem("basket_id", response.data.basket.id);
    })
    .catch(error => {
        console.log(error.response);
    }); 
}
    
    return(
        <Fragment>
               <div className="product">
                <Link to={`/product/${props.value.id}`} className="image"/>
                <div>{props.value.title} {props.value.size} {props.value.color}</div>
                <div>ფასი: {props.value.price} ლარი</div>
                <div className="newcourier" onClick={shop}>დაამატე კალათაში</div>
            </div> 
        </Fragment>
    )
}

export default Product;