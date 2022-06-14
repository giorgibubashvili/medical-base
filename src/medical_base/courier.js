import React, { Fragment, useEffect, useState } from "react";
import api from "../server_api/api";

const Courier = () => {

    const [city, setcity] = useState([]);
    const [cour, setcour] = useState([]);

    const [courier_id, setcourier_id] = useState([]);
    const Courid = (val) => {
        const value = val.target.value.split(" ");
        //console.log(val.target.value, value[0]);
        setcourier_id(value[0]);
    }

    const [email, setemail] = useState();
    const Email = (val) => {
        setemail(val.target.value);
        document.getElementById("inpmailp").textContent = "";
    }

    const [name, setname] = useState();
    const Name = (val) => {
        setname(val.target.value);
    }

    const [delivery_price, setdelivery_price] = useState();
    const Deliver = (val) => {
        setdelivery_price(val.target.value);
    }

    const [free_after, setfree_after] = useState();
    const Raodenoba = (val) => {
        setfree_after(val.target.value);
    }

    const Couriers = async () => {
        const res = await api.get("/couriers");
         setcour(res.data.couriers_list);
     }    

    const addcourier = async () => {
        await api.post("/courier/"+email,{},{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}})
        .then(response => {
            document.getElementById("inpmailp").textContent = "კურიერი წარმატებით დაემატა";
            document.getElementById("inpmailp").style.color = "black";
        })
        .catch(error => {
            if(error.response.status === 400){
                document.getElementById("inpmailp").textContent = "კურიერი უკვე არსებობს";
                document.getElementById("inpmailp").style.color="red";
            }else{
                document.getElementById("inpmailp").textContent = "მაილი არ არის რეგისტრირებული";//404
                document.getElementById("inpmailp").style.color="red";
            }
        })
        document.getElementById("inpmail").value = "";
        addcouriers();
        Couriers();
    }

    const addcouriers = async () => {
        const resp = await api.get("/cities");
        setcity(resp.data.cities_list);
        if(localStorage.getItem("status") === "admin"){
         document.getElementById("shekvetebi_button").style.visibility = "visible";
         document.getElementById("add").style.visibility = "visible";
         document.getElementById("daamate_curierad").style.visibility = "visible";
         document.getElementById("daamate_qalaqi").style.visibility = "visible";
     }
    }

    const addcity = async () => {
        api.post("/city", {name, delivery_price, free_after}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        addcouriers();
        Couriers();
    }
    
    useEffect( () => {
        addcouriers();
        Couriers();
    },[]);

    const cities = city.map((_key, ind) => {
        const delet = async (idi) =>{
            await api.delete("/courier/"+idi,{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
            document.getElementById("inpmailp").textContent = "კურიერი წარმატებით წაიშალა";
            document.getElementById("inpmailp").style.color="red";
            addcouriers();
            Couriers();
       }

       const addcouriercity = async () => {
           let city_id = _key.id;
            api.post("/city_courier", {city_id, courier_id}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
            addcouriers();
            Couriers();
        }

        const removecouriercity = async (courier_id) => {
            let city_id = _key.id;
            api.delete("/city_courier", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}, data: {city_id:city_id,  courier_id:courier_id}});
            addcouriers();
            Couriers();
         }

       const courier = _key.couriers.map((cour, index) => {
           const remove = () => {
               removecouriercity(cour.user.id);
           };

           const delete_courier = () => {
               delet(cour.user.id);
           }

           return(
               <div className="couriers" key={"qurie" + index}  >
                    <div className="courier">{cour.user.name}</div>
                    <div className="courier">{cour.user.surname}</div>
                    <div className="courier">{cour.user.telephone}</div>
                    <div className="courier">{cour.user.email}</div>
                    <div className={"qalaqi"}  > 
                        <div className="courierdel" onClick={remove}>წაშლა ქალაქიდან</div>
                        <div className="courierdel" onClick={delete_courier}>წაშლა კურიერიდან</div> 
                    </div>
                </div> 
           )
       })

           const courier_list = cour.map((idi, index) => {
               return(
                <option key={idi.user.id+"curierlist"+index} >{idi.user.id + " " + idi.user.name + " " + idi.user.surname}</option>
               )
           });

           if(localStorage.getItem("status") === "admin"){
            let cnt = document.getElementsByClassName("daamate_kurieri").length;
        while (cnt--){
            document.getElementsByClassName("daamate_kurieri")[cnt].style.visibility = "visible";
            document.getElementById(_key.id).style.display = "flex";
            document.getElementById(_key.id).style.backgroundColor = "red";
        }   
    }

        const Del_qalaqi = async (v) => { 
           const resp = api.delete("/city/"+v.target.slot, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
           console.log(resp);
            console.log(v.target.slot);
        }

        return(
            <Fragment >
                <div key={"kurier"+ind} >
                    <div>
                        <div colSpan={5} style={{backgroundColor:"rgb(79, 155, 241)"}}>{_key.name}</div>
                        <div id={_key.id} style={{display:"none", backgroundColor:"rgb(79, 155, 241)"}} slot={_key.name} onClick={Del_qalaqi}>washla</div>
                    </div>
                    {/* <div>
                    <div className="courier">სახელი</div>
                    <div className="courier">გვარი</div>
                    <div className="courier">ტელეფონი</div>
                    <div className="courier">მაილი</div>
                </div> */}
                    {courier}
                    <div className="daamate_kurieri" style={{visibiliti:"hidden"}}>
                        
                        <div className="courier">+</div>
                        <div> 
                            <select onChange={Courid}  id="couriers" >
                                <option>აირჩიე კურიერი</option>
                                {courier_list}
                            </select>
                            
                        </div>
                        <div onClick={addcouriercity}>დაამატე კურიერი</div>
                    </div>
                </div>       
            </Fragment>
        )
    })

    if(localStorage.getItem("status") === "admin"){
            let cnt = document.getElementsByClassName("qalaqi").length;
        while (cnt--){
            document.getElementsByClassName("qalaqi")[cnt].style.visibility = "visible";
        }   
    }
    // return null
    return (
  
        <Fragment>
            <div className="courierprop" id="daamate_curierad">
                <div style={{margin:"auto", display:"flex"}} >

                    <input id="inpmail" className="inpu" onChange={Email} placeholder="მაილი" type="email"></input>
                    <div className="newcourier" onClick={addcourier}>დაამატე კურიერი</div>
                </div>
                
                <div id="inpmailp"></div>
                
            </div>
            
            <div className="table">
            {/* <thead>
                <tr >
                        <th colSpan={5}>ქალაქი</th>
                </tr>
            </thead> */}
            {cities} 
            {/* <tbody > */}
                <div id="daamate_qalaqi">
                    <div>+</div>
                    <div><input onChange={Name} placeholder="ქალაქი" /></div>
                    <div><input onChange={Deliver} placeholder="მიწოდების საფასური" /></div>
                    <div><input onChange={Raodenoba} placeholder="რაოდენობა" /></div>
                    <div onClick={addcity}>დაამატე ქალაქი</div>
                </div>
            {/* </tbody> */}
                
            </div>
        </Fragment>
    )
}
export default Courier;