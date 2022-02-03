import React, { Fragment, useState } from "react";
import api from "../server_api/api";
import "./admin.css";

const Admin = (props) => {

    const [title, setTiTle] = useState("");
    const Title = (value) =>{
        setTiTle(value.target.value);
    }

    const [size, setSiZe] = useState("");
    const Size = (value) =>{
        setSiZe(value.target.value);
    }

    const [price, setPriCe] = useState([]);
    const Price = (value) =>{
        setPriCe(Number(value.target.value));
    }

    const [color, setCoLor] = useState("");
    const Color = (value) =>{
        setCoLor(value.target.value);
    }

    const [manufacturer, setManufaCturer] = useState("");
    const Manufacturer = (value) =>{
        setManufaCturer(value.target.value);
    }

    const [amount, setAmoUnt] = useState([]);
    const Amount = (value) =>{
        setAmoUnt(Number(value.target.value));
    }

    // const [name, setname] = useState([]);
    // const Name = (value) =>{
    //     setname(value.target.value);
    // }

    // const [delivery_price, setdelivery_price] = useState([]);
    // const delivery = (value) =>{
    //     setdelivery_price(Number(value.target.value));
    // }

    // const savesity = async () =>{
    //     const response = await api.post("/city", {name, delivery_price}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
    //     console.log(response);
    // }

    const Save = async () =>{
        const response = await api.post("/product", {title, size, price, color, manufacturer, amount},{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        //console.log(localStorage.getItem("access_token"));
        console.log(response);
        hid();
        props.onad();
    }

    const hid = () => {
        if(document.getElementById("new").style.visibility === "visible"){
            document.getElementById("new").style.visibility = "hidden";
            document.getElementById("admin").style.visibility = "hidden";
        }else{
            document.getElementById("new").style.visibility = "visible";
            document.getElementById("admin").style.visibility = "visible";
        }
    }

    return(
        <Fragment>
            <div className="admin" id="admin">
            <div className="new_pr" id="new" >
                <div  >
                <div className="hid" onClick={hid}>x</div>
                <p className="title">დასახელება</p>
                <input className="title" onChange={Title} />
                <p className="size">ზომა</p>
                <input className="size" onChange={Size}/>
                <p className="price">ფასი</p>
                <input className="price" onChange={Price} />
                <p className="color">ფერი</p>
                <input className="color" onChange={Color} />
                <p className="manufacturer">მწარმოებელი</p>
                <input className="manufacturer" onChange={Manufacturer} />
                <p className="amount">რაოდენობა</p>
                <input className="amount" onChange={Amount} />
                <div className="save" onClick={Save}>შენახვა</div>
                </div>
                
                {/* <div>
                    <input placeholder="qalaqi" onChange={Name}></input>
                    <input placeholder="miwodebis fasi" onChange={delivery}/>
                    <div className="save" onClick={savesity}>qalaqis damateba</div>
                </div> */}
            </div>
                
            </div>
            <div className="add" id="add" onClick={hid}>
                +
            </div>
            
        </Fragment>
    )
};
export default Admin;