import React from "react";
import { Fragment, useState, useEffect } from "react";
import api from "../server_api/api";

const Shekveta = () => {
    const [status_id, setstatus_id] = useState("New");
    const [new1, setnew1] = useState([]);
    // const [mimgebi, setmimgebi] = useState([]);
    const [coment, setcoment] = useState([]);

    const Coment = (v) => {
        setcoment(v.target.value);
    }

    const chamonatvali = (value, v) => { 
        document.getElementById(status_id).className = "stat";
        document.getElementById(value).className = "active";
        setstatus_id(value);
        while(v--){
            document.getElementById(v+"p").style.display = "none";
        }
    }

    const down =(v) => {
        document.getElementById(v.target.id).style.backgroundColor = "gray";  
        if(document.getElementById(v.target.id+"p").style.display === "table-row"){
            document.getElementById(v.target.id+"p").style.display = "none";
        }else{
            document.getElementById(v.target.id+"p").style.display = "table-row";
        }

        if(document.getElementsByClassName("active")[0].id === "New"){
            document.getElementById("migeba"+v.target.id).style.visibility = "visible";
            document.getElementById("chabareba1"+v.target.id).style.visibility = "hidden";
            document.getElementById("chabareba2"+v.target.id).style.visibility = "hidden";
            document.getElementById("chabareba3"+v.target.id).style.visibility = "hidden";
            document.getElementById("mizezi"+v.target.id).style.visibility = "hidden";
            // document.getElementById("mimgebi"+v.target.id).style.visibility = "hidden"; 
        }else if(document.getElementsByClassName("active")[0].id === "Mig"){
            document.getElementById("chabareba1"+v.target.id).style.visibility = "visible";
            document.getElementById("chabareba2"+v.target.id).style.visibility = "visible";
            document.getElementById("chabareba3"+v.target.id).style.visibility = "visible";
            document.getElementById("migeba"+v.target.id).style.visibility = "hidden";
            document.getElementById("mizezi"+v.target.id).style.visibility = "hidden";
            // document.getElementById("mimgebi"+v.target.id).style.visibility = "visible";
            
        }else if(document.getElementsByClassName("active")[0].id === "Gauq"){
            document.getElementById("mizezi"+v.target.id).style.visibility = "visible";
            // document.getElementById("mimgebi"+v.target.id).style.visibility = "visible";
        }else{
            document.getElementById("chabareba1"+v.target.id).style.visibility = "hidden";
            document.getElementById("chabareba2"+v.target.id).style.visibility = "hidden";
            document.getElementById("chabareba3"+v.target.id).style.visibility = "hidden";
            document.getElementById("migeba"+v.target.id).style.visibility = "hidden";
            document.getElementById("mizezi"+v.target.id).style.visibility = "hidden";
            // document.getElementById("mimgebi"+v.target.id).style.visibility = "visible";
            // mimgebi();
        }
    }

    useEffect( () => {
        get_data();
    },[]);

    const get_data = async () => {
        const response = await api.get("/courier/orders", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}, params: {status: 1}});       
        setnew1(response.data.orders);
        chamonatvali("New", response.data.orders.length);
        // console.log(v);
    };

    const get_mig = async () => {
        const response = await api.get("/courier/orders", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}, params: {status: 2}});
        // console.log(response);
        setnew1(response.data.orders);
        chamonatvali("Mig", response.data.orders.length);
        // setmimgebi(response.data.attached_courier.user.email);
    };

    const get_chab = async () => {
        const response = await api.get("/courier/orders", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}, params: {status: 3}});
        setnew1(response.data.orders);
        chamonatvali("Chab", response.data.orders.length);
        // setmimgebi(response.data.attached_courier.user.email);
    };

    const get_gauq = async () => { 
        const response = await api.get("/courier/orders", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}, params: {status: 4}});
        setnew1(response.data.orders);
        chamonatvali("Gauq", response.data.orders.length);
        // setmimgebi(response.dataid.attached_courier.user.email);
    };

    const dastur = async (v) => {
        // console.log(v.target.name)
       await api.post("/courier/order/"+v.target.name, {}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        get_data();
    };

    const dastavka = async (v) => {
        await api.put("/courier/order/"+v.target.name, {}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        get_mig();
    };

    const dablokva = async (v) => {
        await api.delete("/courier/order/"+v.target.name, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }, 
            data: {
                reason:coment
            }
        });
        get_mig();
    };


    const Text1 = new1.map((id, ind) => {
// console.log(id)
// setmimgebi(id.attached_courier.user.email);
        const prod_list = id.basket.products.map((prod, ind1) => {
            // console.log(prod);
            
            return(
                <tr key={"list1"+ind1}>
                    <td>{prod.title}</td>
                    <td>{prod.size}</td>
                    <td>{prod.color}</td>
                    <td>{prod.quantity}</td>
                    <td>{prod.final_price}</td>
                    <td>{prod.final_total_cost}</td>
                </tr> 
            )
        })
        
        return( 
            <Fragment>
                <tr className="new_shek" id={ind}   key={"chamonatvali"+ind} onClick={down}>
                    <td id={ind}>{id.nearest_city.name}</td>
                    <td id={ind}>{id.customer_address}</td>
                    <td id={ind}>{id.customer_name}</td>
                    <td id={ind}>{id.customer_telephone}</td>
                    <td id={ind}>{id.total_cost}</td>
                </tr>
                <tr className="downp" id={ind+"p"} key={"chamonatval"+ind} >
                    <td colSpan="5">
                        <div style={{backgroundColor:"rgb(190, 196, 193)"}}>
                            <button id={"migeba"+ind} name={id.id} onClick={dastur}>მიღება</button>
                            <button id={"chabareba1"+ind} name={id.id} onClick={dastavka}>ჩაბარება</button>
                            <input id={"chabareba2"+ind} name={id.id} onChange={Coment}/>
                            <button id={"chabareba3"+ind} name={id.id} onClick={dablokva}>გაუქმება</button>
                            <div id={"mimgebi1"+ind} style={{display: id.attached_courier ? "block" : "none"}}>
                                მიმღები: {id.attached_courier ? id.attached_courier.user.email : ""}
                            </div>
                            
                            <div style={{display:"block"}}>კომენტარი:{id.customer_comment}</div>
                            <div id={"mizezi"+ind} style={{display:"block"}}>მიზეზი:{id.courier_comment}</div>
                            
                            <table>
                                <thead>
                                <tr>
                                    <th>სახელი</th>
                                    <th>ზომა</th>
                                    <th>ფერი</th>
                                    <th>რაოდენობა</th>
                                    <th>ფასი</th>
                                    <th>ჯამი</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {prod_list}  
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr> 
            </Fragment>
        )
    });

    return(
        <Fragment>
            <ul>
                <li id="New" className="active" onClick={get_data}>ახალი</li>
                <li id="Mig" className="stat" onClick={get_mig}>მიღებული</li>
                <li id="Chab" className="stat" onClick={get_chab}>ჩაბარებული</li>
                <li id="Gauq" className="stat" onClick={get_gauq}>გაუქმებული</li>
            </ul>
            
            <div>
                <table className="tb_shek">
                    <thead>
                        <tr>
                            <th>ქალაქი</th>
                            <th>მისამართი</th>
                            <th>სახელი</th>
                            <th>ტელეფონი</th>
                            <th>ფასი</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Text1}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
};

export default Shekveta;