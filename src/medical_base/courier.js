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

    const Couriers = async () => {
        const res = await api.get("/couriers");
         setcour(res.data.couriers_list);
        //console.log(res);
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
            // console.log(error.response.status);
        })
        document.getElementById("inpmail").value = "";
        addcouriers();
        Couriers();
    }

    const addcouriers = async () => {
        const resp = await api.get("/cities");
        //console.log(resp);
        setcity(resp.data.cities_list);
    }

    const addcity = async () => {
        const response = await api.post("/city", {name, delivery_price}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        console.log(response);
        addcouriers();
        Couriers();
    }
    
    useEffect( () => {
        addcouriers();
        Couriers();
    },[]);

    const cities = city.map((_key) => {
        //console.log(_key);
        const delet = async (idi) =>{
            //console.log(idi);
            await api.delete("/courier/"+idi,{headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
            document.getElementById("inpmailp").textContent = "კურიერი წარმატებით წაიშალა";
            document.getElementById("inpmailp").style.color="red";
            addcouriers();
            Couriers();
       }

       const addcouriercity = async () => {
           let city_id = _key.id;
           console.log(courier_id, city_id);
            const res = await api.post("/city_courier", {city_id, courier_id}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
            console.log(res.data);
            addcouriers();
            Couriers();
        }

        const removecouriercity = async (courier_id) => {
            let city_id = _key.id;
            console.log(city_id, courier_id);
            const res = await api.delete("/city_courier", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}, data: {city_id:city_id,  courier_id:courier_id}});
            console.log(res.data);
            addcouriers();
            Couriers();
         }

       const courier = _key.couriers.map((cour) => {
           const remove = () => {
               //setcourier_id(); 
               removecouriercity(cour.user.id);
           };

           const delete_courier = () => {
               delet(cour.user.id);
           }

           return(
               <tr className="couriers" key={cour.user.id}>
                    <td className="courier">{cour.user.name}</td>
                    <td className="courier">{cour.user.surname}</td>
                    <td className="courier">{cour.user.telephone}</td>
                    <td className="courier">{cour.user.email}</td>
                    <td className="courierdel" onClick={remove}  >წაშლა ქალაქიდან</td>
                    <td className="courierdel" onClick={delete_courier}>წაშლა კურიერიდან</td>
                </tr> 
           )
       })

    //    const Couriers = async () => {
    //        const res = await api.get("/couriers");
    //         setcour(res.data.couriers_list);
    //        //console.log(res);
    //     }    
           const courier_list = cour.map((idi) => {
               //console.log(_key.user.id);
               return(
                <option value={idi.user.id + " " + idi.user.name + " " + idi.user.surname} ></option>
               )
           })
    

        return(
            <Fragment >
                <tbody key={_key.id} >
                    <tr>
                        <td>{_key.name}</td>
                        <td>{_key.delivery_price} ლარი</td >
                    </tr>
                    <tr>
                    <th className="courier">სახელი</th>
                    <th className="courier">გვარი</th>
                    <th className="courier">ტელეფონი</th>
                    <th className="courier">მაილი</th>
                </tr>
                    {courier}
                    <tr>
                        <th className="courier">+</th>
                        <th> 
                            <input list="couriers" onChange={Courid} placeholder="კურიერი" />
                            <datalist id="couriers" >
                                {/* <option value="gio" ></option>
                                <option value="nika" ></option>
                                <option value="ale" ></option>  */}
                                {courier_list}
                            </datalist>
                            
                        </th>
                        <th onClick={addcouriercity}>დაამატე კურიერი</th>
                    </tr>
                </tbody>       
            </Fragment>
        )
    })

    return(
  
        <Fragment>
            <div className="courierprop">
                <div style={{margin:"auto", display:"flex"}} >

                    <input id="inpmail" className="inpu" onChange={Email} placeholder="მაილი" type="email"></input>
                    <div className="newcourier" onClick={addcourier}>დაამატე კურიერი</div>
                </div>
                
                <div id="inpmailp"></div>
                
            </div>
            
            <table className="table">
            <thead>
                <tr>
                        <th>ქალაქი</th>
                        <th>მიწოდების საფასური</th>
                    </tr>
            </thead>
            {cities} 
            <tbody>
                
                <tr>
                    <th>+</th>
                    <th><input onChange={Name} placeholder="ქალაქი" /></th>
                    <th><input onChange={Deliver} placeholder="მიწოდების საფასური" /></th>
                    <th onClick={addcity}>დაამატე ქალაქი</th>
                </tr>
            </tbody>
                
            </table>
        </Fragment>
    )
}
export default Courier;