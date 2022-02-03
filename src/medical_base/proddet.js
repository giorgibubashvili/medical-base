import React, { Fragment, useEffect, useState } from "react";
import api from "../server_api/api";
import { Link } from "react-router-dom";
import "./proddet.css";

const Proddet = (props) => {
    const get_data = async () => {
        const response = await api.get(window.location.pathname);
         console.log(response);
        settitle(response.data.title);
        setsize(response.data.size);
        setprice(response.data.price);
        setcolor(response.data.color);
        setmanufacturer(response.data.manufacturer);
        setamount(response.data.amount);
     };

    const [title, settitle] = useState();
     const Title = (value) =>{
         settitle(value.target.value);
     }

     const [size, setsize] = useState();
    const Size = (value) =>{
        setsize(value.target.value);
    }

     const [price, setprice] = useState();
    const Price = (value) =>{
        setprice(Number(value.target.value));
    }

     const [color, setcolor] = useState();
    const Color = (value) =>{
        setcolor(value.target.value);
    }

     const [manufacturer, setmanufacturer] = useState();
    const Manufacturer = (value) =>{
        setmanufacturer(value.target.value);
    }

     const [amount, setamount] = useState();
    const Amount = (value) =>{
        setamount(Number(value.target.value));
    }

    const [img, setimg] = useState();
    const addpoto = (ev) => {
        let reader = new FileReader();
        reader.readAsDataURL(ev.target.files[0]);
        reader.onload = function (ev) {
            setimg(ev.target.result);
        }
    };

    const update = () => {
        if(document.getElementById("update").textContent === "განახლება"){
            document.getElementById("update").textContent = "უკან";
            document.getElementById("title").type = "text";
            document.getElementById("size").type = "text";
            document.getElementById("color").type = "text";
            document.getElementById("manufacturer").type = "text";
            document.getElementById("amount").type = "text";
            document.getElementById("price").type = "text";
            document.getElementById("title").style.border = "solid";
            document.getElementById("size").style.border = "solid";
            document.getElementById("color").style.border = "solid";
            document.getElementById("manufacturer").style.border = "solid";
            document.getElementById("amount").style.border = "solid";
            document.getElementById("price").style.border = "solid";
            document.getElementById("change").style.visibility = "visible";
            document.getElementById("img").style.visibility = "visible";
            document.getElementById("imginput").style.visibility = "visible";
            document.getElementById("changeimg").style.visibility = "visible";
        }else{
            document.getElementById("update").textContent = "განახლება";
            document.getElementById("title").type = "button";
            document.getElementById("size").type = "button";
            document.getElementById("color").type = "button";
            document.getElementById("manufacturer").type = "button";
            document.getElementById("amount").type = "button";
            document.getElementById("price").type = "button";
            document.getElementById("title").style.border = "none";
            document.getElementById("size").style.border = "none";
            document.getElementById("color").style.border = "none";
            document.getElementById("manufacturer").style.border = "none";
            document.getElementById("amount").style.border = "none";
            document.getElementById("price").style.border = "none";
            document.getElementById("change").style.visibility = "hidden";
            document.getElementById("img").style.visibility = "hidden";
            document.getElementById("imginput").style.visibility = "hidden";
            document.getElementById("changeimg").style.visibility = "hidden";
            get_data();
        }
    }

    const del = () =>{
        document.getElementById("del").style.visibility = "visible";
    }
    const no = () => {
        document.getElementById("del").style.visibility = "hidden";
    }

    const delet = async () => {
        const req = await api.delete(window.location.pathname,{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        console.log(req);
        props.onad();
    }

    const Change = async () => {
        const response = await api.put(window.location.pathname, {title, size, price, color, manufacturer, amount},{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        console.log(response);
        document.getElementById("update").textContent = "განახლება";
            document.getElementById("title").type = "button";
            document.getElementById("size").type = "button";
            document.getElementById("color").type = "button";
            document.getElementById("manufacturer").type = "button";
            document.getElementById("amount").type = "button";
            document.getElementById("price").type = "button";
            document.getElementById("title").style.border = "none";
            document.getElementById("size").style.border = "none";
            document.getElementById("color").style.border = "none";
            document.getElementById("manufacturer").style.border = "none";
            document.getElementById("amount").style.border = "none";
            document.getElementById("price").style.border = "none";
            document.getElementById("change").style.visibility = "hidden";
            document.getElementById("img").style.visibility = "hidden";
            document.getElementById("imginput").style.visibility = "hidden";
            document.getElementById("changeimg").style.visibility = "hidden";
    }

    useEffect( () => {
        get_data();
    },[]);

    const[raod, setraod] = useState();
    const rao = (value) => {
        setraod(value.target.value);
    }

    const[prc, setprc] = useState();
    const prcnt = (value) => {
        setprc(value.target.value);
    }

    const sale = async () => {
        const response = await api.post("/discount", {"percent": prc, "range_min": raod}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        console.log(response);
     };

     const sales = async () => {
        const response = await api.get("/discounts");
        console.log(response);
     };

    return(
        <Fragment>
                <div >
                    <div className="proddettop">
                        <div className="proddettitle" >პროდუქტის აღწერა</div>
                        <div>
                            <input placeholder="raodenoba" onChange={rao}/>
                            <input placeholder="procenti" onChange={prcnt}/>
                            <button onClick={sale}>daamate fasdakleba</button>
                            <button onClick={sales}>fasdaklebebis chamonatvali</button>
                        </div>
                        <div id="update" className="update" onClick={update} >განახლება</div>
                        <div id="delete" className="delete" onClick={del} >წაშლა</div>
                        <div id="del" className="deldiv" >
                            <div  className="deltitle">გსურთ წაშალოთ მოცემული პროდუქტი?</div>
                            <div className="delbut" >
                                <Link to="/" className="yes" onClick={delet}>დიახ</Link>
                                <div className="no" onClick={no}>არა</div>
                            </div>
                        </div>
                    </div>
                    <div className="proddetbuttom"> 
                    <div>
                        <div className="imagedet">
                        
                        </div>
                        <div>
                            <img id="img" className="img" src={img} alt=""/>
                            <input id="imginput" className="imginput" type="file" accept="image/*" defaultValue="" onChange={addpoto}></input>
                            <div id="changeimg" className="changeimg" >სურათის დამატება</div>
                        </div>
                        </div>
                        <div >
                            <div>დასახელება: <input id="title" className="inp" onChange={Title} type="button" defaultValue={title} /> </div>
                            <div>ზომა: <input id="size" className="inp" onChange={Size} type="button" defaultValue={size} /> </div>
                            <div>ფერი: <input id="color" className="inp" onChange={Color} type="button" defaultValue={color} /></div>
                            <div>მწარმოებელი: <input id="manufacturer" className="inp" onChange={Manufacturer} type="button" defaultValue={manufacturer} /></div>
                            <div>რაოდენობაშია: <input id="amount" className="inp" onChange={Amount} type="button" defaultValue={amount} />ცალი</div>
                            <div>ფასი: <input id="price" className="inp" onChange={Price} type="button" defaultValue={price} /> ლარი</div>
                            <div id="change" className="change" onClick={Change}>შენახვა</div> 
                            <div className="newcourier">დაამატე კალათაში</div> 
                        </div>
                        
                    </div>  
                                       
                </div>
           
        </Fragment>
    )
}
export default Proddet; 