import React, { Fragment, useEffect, useState } from "react";
import api from "../server_api/api";
import { Link } from "react-router-dom";
import "./proddet.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

const Proddet = (props) => {

    const get_data = async () => {
        const response = await api.get(window.location.pathname);
        console.log(window.location   );
        settitle(response.data.title);
        setsize(response.data.size);
        setprice(response.data.price);
        setcolor(response.data.color);
        setmanufacturer(response.data.manufacturer);
        setamount(response.data.amount);
        setprod_id(response.data.id);
        setdiscou(response.data.discounts);
        setpotos(response.data.images);
        if(localStorage.getItem("status") === "admin"){
            // console.log(0)
         document.getElementById("update").style.visibility = "visible";
     }
        // Sales();
        // document.getElementById("sales").value = "jio";
    };

    const [discou, setdiscou] = useState([]);
    const Discou = discou.map((id, ind) => {
        // console.log(id);
        return(
            <div key={ind}>- {id.percent} &#37; &ge; {id.range_min}</div>
        )
    });

    const [prod_id, setprod_id] = useState();
    const [price_id, setprice_id] = useState();
    const pric_id = (value) => {
        const val = value.target.value.split(" ");
        setprice_id(Number(val[0]));
    }

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

    const [potos, setpotos] = useState([]);
    const [delid, setdelid] = useState();
    const Potos = potos.map((idi, ind) => {
        // console.log(idi.id);
        // setprice_id(id i.id);
        // price_id = idi.id;
    

        return(
         <img className="imagedet" src={idi.img} alt="" key={"img"+ind} name={idi.id} /> 
        )
    }) 

    const [img2, setimg2] = useState();

    const [img, setimg] = useState();

    const Potoid = (ev) => {
        // console.log(ev);
        // console.log(potos[ev])
        setimg(potos[ev].img);
        setdelid(potos[ev].id);
    }

    const Delpoto = async () =>{
        // console.log(delid);
        const req = await api.delete(window.location.pathname + "/remove_image/"+delid,{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        console.log(req);
    }

    // const [image, setimage] = useState([]);

    // const convertToBase64=(ArrayBuffer)=>{
    //     const bas = btoa(new Uint8Array(ArrayBuffer).reduce((data,byte) => data + String.fromCharCode(byte), ''));
    //     return bas;
    // }

    // const potolist = potos.map((idi, cnt) => {
    //     console.log(idi.id);
    //     // setprice_id(id i.id);
    //     // price_id = idi.id;
    //     // setimage(idi.img);
    //     return(
    //      <option key={cnt}>gio</option>
    //     )
    // });

    const sendpoto = async () => {
        var formdata = new FormData();
        formdata.append("image", img2);

        // function convertToBase64(arrayBuffer) {
        //     const base64 = Buffer.from(arrayBuffer).toString("base64")
        //     // (new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        //     return base64;
        //   }

        // api.post("/upload/image", formdata,{
        //      responseType:"blob"
        //  })
        //  .then((response) => response.data.arrayBuffer())
        //  .then((response) => {setimage("data:image/png;base64," + convertToBase64(response))})
        //  .then((response) => {
        //     setimage(URL.createObjectURL(response.data))
        //  })

        // const response = await 
        api.post(window.location.pathname+"/attach_image", formdata ,{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}})
        // console.log(response);
        // setimage("data:image/png;base64," + response.data.image.img);
        // console.log(image);
        // console.log(img);
     };

    const addpoto = (ev) => {
        let reader = new FileReader();
        reader.readAsDataURL(ev.target.files[0]);
        reader.onload = function (eve) {
            setimg(eve.target.result);
            setimg2(ev.target.files[0]);
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
            document.getElementById("delpoto").style.visibility = "visible";
            document.getElementById("daamate_fasdakleba").style.visibility = "visible";
            document.getElementById("airchie_fasdakleba").style.visibility = "visible";
            document.getElementById("delete").style.visibility = "visible";
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
            document.getElementById("delpoto").style.visibility = "hidden";
            document.getElementById("daamate_fasdakleba").style.visibility = "hidden";
            document.getElementById("airchie_fasdakleba").style.visibility = "hidden";
            document.getElementById("delete").style.visibility = "hidden";
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
        // const req = await 
        api.delete(window.location.pathname,{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        // console.log(req);
        props.onad();
    }

    const Change = async () => {
        // const response = await 
        api.put(window.location.pathname, {title, size, price, color, manufacturer, amount},{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        // console.log(response);
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
            document.getElementById("delpoto").style.visibility = "hidden";
            document.getElementById("daamate_fasdakleba").style.visibility = "visible";
            document.getElementById("airchie_fasdakleba").style.visibility = "visible";
            document.getElementById("delete").style.visibility = "visible";
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
        // const response = await 
        api.post("/discount", {"percent": prc, "range_min": raod}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        // console.log(response);
        // Sales();
     };

     const[sales, setsales] = useState([]);
     const Sales = async (v) => {
        const response = await api.get("/discounts");
        // console.log(response);
        setsales(response.data.discounts);
        // console.log(v);
     };

     const addsale = sales.map((idi, ind) => {
        // console.log(idi);
        // setprice_id(id i.id);
        // price_id = idi.id;
        return(
         <option key={ind} >{idi.id + " " + idi.range_min + " " + idi.percent}</option>
        )
    })

    const prodaddsale = async () => {
        // const response = await 
        api.post("/product_discount", {product_id:prod_id, discount_id:price_id}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        // console.log(response);
        // console.log(price_id, prod_id);
        get_data();
    }

    // if(localStorage.getItem("status") === "admin"){
    //     console.log(localStorage.getItem("status"))
    //  document.getElementById("shekvetebi_button").style.visibility = "visible";
    //  document.getElementById("add").style.visibility = "visible";
    //  document.getElementById("daamate_curieri").style.visibility = "visible";
    //  document.getElementById("daamate_fasdakleba").style.visibility = "visible";
    //  document.getElementById("airchie_fasdakleba").style.visibility = "visible";
    //  document.getElementById("update").style.visibility = "visible";
    //  document.getElementById("delete").style.visibility = "visible";
//  }

    const shop = async () => {
        // console.log(localStorage.getItem("basket_id"));
        
        let basket_title = "None";
        if(!localStorage.getItem("basket_title")){
            basket_title = "None";
        }else{
            basket_title = localStorage.getItem("basket_title");
        }
        // console.log(id);
        await api.post("/basket/"+basket_title, {"product_id": prod_id, "quantity": quantity})
        .then(response => {
            console.log(response.data);
            localStorage.setItem("basket_title", response.data.basket.title);
        })
        .catch(error => {
            console.log(error.response);
        }); 
        props.shop_cnt();
    }

    const [quantity, setquantity] = useState([1]);

    const inp = (v) =>{
        // document.getElementById("prodinpraod").value = Math.abs(Math.round(document.getElementById("prodinpraod").value)) ;
        //         if(document.getElementById("prodinpraod").value === "0"){
        //             document.getElementById("prodinpraod").value = "1";
        //         }
        setquantity(v.target.value);
    }   

    const plus = () => {
        document.getElementById("prodinpraod").value ++;
        setquantity(document.getElementById("prodinpraod").value);
    }
    
    const minus = () => {
        if(document.getElementById("prodinpraod").value > 1){
            document.getElementById("prodinpraod").value --;
        }
        setquantity(document.getElementById("prodinpraod").value);
    }

    // if(localStorage.getItem("status") === "admin"){
    //     console.log(localStorage.getItem("status"))
    //  document.getElementById("shekvetebi_button").style.visibility = "visible";
    //  document.getElementById("add").style.visibility = "visible";
    //  document.getElementById("daamate_curieri").style.visibility = "visible";
    //  document.getElementById("daamate_fasdakleba").style.visibility = "hidden";
    //  document.getElementById("airchie_fasdakleba").style.visibility = "hidden";
    //  document.getElementById("update").style.visibility = "hidden";
    //  document.getElementById("delete").style.visibility = "hidden";
//  }

    return(
        <Fragment>
                <div >
                    <div className="proddettop">
                        <div className="proddettitle" >პროდუქტის აღწერა</div>
                        <div id="daamate_fasdakleba" >
                        {/* style={{visibility:visible?"visible":"hidden"}} */}
                            <input placeholder="raodenoba" onChange={rao}/>
                            <input placeholder="procenti" onChange={prcnt}/>
                            <button onClick={sale}>daamate fasdakleba</button>
                            {/* <button onClick={sales}>fasdaklebebis chamonatvali</button> */}
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
                        <div >
                        <Carousel className="imagedett"  onClickItem={Potoid} name="gio">
                            {Potos}
                        </Carousel>
                        </div>
                        <div >
                            <img id="img" className="img" src={img} alt=""/>
                            <input id="imginput" className="imginput" type="file" accept="image/*" defaultValue="" onChange={addpoto}></input>
                            <div id="changeimg" className="changeimg" onClick={sendpoto} >სურათის დამატება</div>
                            <div id="delpoto" className="no" onClick={Delpoto}> suratis washla</div>
                            {/* <div>
                                <select >
                                    <option>foto</option>
                                    <option>{potolist}</option>
                                </select>
                                <img src={"data:image/png;base64,"+image} alt=""/> 
                            </div> */}
                        </div>
                        </div>
                        <div >
                            <div>დასახელება: <input id="title" className="inp" onChange={Title} type="button" defaultValue={title} /> </div>
                            <div>ზომა: <input id="size" className="inp" onChange={Size} type="button" defaultValue={size} /> </div>
                            <div>ფერი: <input id="color" className="inp" onChange={Color} type="button" defaultValue={color} /></div>
                            <div>მწარმოებელი: <input id="manufacturer" className="inp" onChange={Manufacturer} type="button" defaultValue={manufacturer} /></div>
                            <div>რაოდენობა: <input id="amount" className="inp" onChange={Amount} type="button" defaultValue={amount} />ცალი</div>
                            <div>ფასი: <input id="price" className="inp" onChange={Price} type="button" defaultValue={price} /> &#8382;</div>
                            {/* <div>ფასდაკლება</div> */}
                            <div>{Discou}</div>
                            <div id="change" className="change" onClick={Change}>შენახვა</div> 
                            <div className="increm_input">
                                <div onClick={minus} className="increm">-</div>
                                <input className="input" defaultValue={1} onChange={inp} id="prodinpraod" />
                                <div onClick={plus} className="increm">+</div>
                            </div>
                            <div className="newcourier" onClick={shop}>დაამატე კალათაში</div> 
                        </div>

                        <div id="airchie_fasdakleba">
                            {/* <input   list="sales"  placeholder="ფასდაკლება" /> */}
                                <select onClick={Sales} id="sales" onChange={pric_id}>
                                {/* <option value="gio" ></option>
                                <option value="nika" ></option>
                                <option value="ale" ></option>  */}
                                <option>ფასდაკლება</option>
                                    {addsale}
                                </select>
                            <button onClick={prodaddsale}>daamate fasdakleba</button>
                        </div>
                        
                    </div>  
                                       
                </div>
           
        </Fragment>
    )
}
export default Proddet; 