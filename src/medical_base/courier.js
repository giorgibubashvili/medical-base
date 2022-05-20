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
        if(localStorage.getItem("status") === "admin"){
            // console.log(0)
         document.getElementById("shekvetebi_button").style.visibility = "visible";
         document.getElementById("add").style.visibility = "visible";
         document.getElementById("daamate_curierad").style.visibility = "visible";
         document.getElementById("daamate_qalaqi").style.visibility = "visible";
        //  document.getElementById("daamate_kurieri").style.visibility = "visible";
        //  document.getElementById("washale_qalaqidan").style.visibility = "visible";
        //  document.getElementById("washale_curieridan").style.visibility = "visible";
     }
    }

    const addcity = async () => {
        // const response = await 
        api.post("/city", {name, delivery_price}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        // console.log(response);
        addcouriers();
        Couriers();
    }
    
    useEffect( () => {
        addcouriers();
        Couriers();
    },[]);

    const cities = city.map((_key, ind) => {
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
        //    console.log(courier_id, city_id);
            // const res = await 
            api.post("/city_courier", {city_id, courier_id}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
            // console.log(res.data);
            addcouriers();
            Couriers();
        }

        const removecouriercity = async (courier_id) => {
            let city_id = _key.id;
            // console.log(city_id, courier_id);
            // const res = await 
            api.delete("/city_courier", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}, data: {city_id:city_id,  courier_id:courier_id}});
            // console.log(res.data);
            addcouriers();
            Couriers();
         }

       const courier = _key.couriers.map((cour, index) => {
           const remove = () => {
               //setcourier_id(); 
               removecouriercity(cour.user.id);
           };

           const delete_courier = () => {
               delet(cour.user.id);
           }

        //    if(localStorage.getItem("status") === "admin"){
        //         console.log(int);
        //         // document.getElementById(int+"qalaqi").style.visibility = "hidden";
        //         // document.getElementById(int+"qalaqi").style.visibility = "visible";
        // //  document.getElementById(int+"curier").style.visibility = "visible";
        //     // document.getElementsByClassName("Courierdel").style.visibility = "visible";
        //     }else{
        //         document.getElementById(int+"qalaqi").style.visibility = "hidden";
        //     }
    

           return(
               <tr className="couriers" key={"qurie" + index} >
                    <td className="courier">{cour.user.name}</td>
                    <td className="courier">{cour.user.surname}</td>
                    <td className="courier">{cour.user.telephone}</td>
                    <td className="courier">{cour.user.email}</td>
                    <td className={"qalaqi"}  > 
                        <div className="courierdel" onClick={remove}>წაშლა ქალაქიდან</div>
                        <div className="courierdel" onClick={delete_courier}>წაშლა კურიერიდან</div> 
                    </td>
                    {/* <td id={int+"curier"}  className="courierdel"></td> */}
                </tr> 
           )
       })

    //    if(localStorage.getItem("status") === "admin"){
    //        let cnt = cour.length;
    //        while(cnt--){
    //            console.log(cnt);
    //             document.getElementById(cnt +"qalaqi").style.visibility = "visible";
    //         //    cnt--;
    //        }
        
        // document.getElementById(int+"qalaqi").style.visibility = "hidden";
        //
//  document.getElementById(int+"curier").style.visibility = "visible";
    // document.getElementsByClassName("Courierdel").style.visibility = "visible";
    // }
//else{
//         let cnt = cour.length;
//         while(cnt--){
//             document.getElementById(cnt+"qalaqi").style.visibility = "hidden";
//             console.log(cnt+"k");
//             cnt--;
//         }
//         // document.getElementById(cnt+"qalaqi").style.visibility = "hidden";
//     }

    //    const Couriers = async () => {
    //        const res = await api.get("/couriers");
    //         setcour(res.data.couriers_list);
    //        //console.log(res);
    //     }    
           const courier_list = cour.map((idi, index) => {
               //console.log(_key.user.id);
               return(
                <option key={"curierlist"+index} >{idi.user.id + " " + idi.user.name + " " + idi.user.surname}</option>
               )
           });

           if(localStorage.getItem("status") === "admin"){
            let cnt = document.getElementsByClassName("daamate_kurieri").length;
        while (cnt--){
            document.getElementsByClassName("daamate_kurieri")[cnt].style.visibility = "visible";
        }   
    }

        return(
            <Fragment >
                <tbody key={"kurier"+ind} >
                    <tr>
                        <th colSpan={5} style={{backgroundColor:"rgb(79, 155, 241)"}}>{_key.name}</th>
                        {/* <td>{_key.delivery_price} ლარი</td > */}
                    </tr>
                    <tr>
                    <th className="courier">სახელი</th>
                    <th className="courier">გვარი</th>
                    <th className="courier">ტელეფონი</th>
                    <th className="courier">მაილი</th>
                </tr>
                    {courier}
                    <tr className="daamate_kurieri" style={{visibiliti:"hidden"}}>
                        <th></th>
                        <th className="courier">+</th>
                        <th> 
                            {/* <input list="couriers" placeholder="კურიერი" /> */}
                            <select onChange={Courid}  id="couriers" >
                                {/* <option value="gio" ></option>
                                <option value="nika" ></option>
                                <option value="ale" ></option>  */}
                                <option>აირჩიე კურიერი</option>
                                {courier_list}
                            </select>
                            
                        </th>
                        <th onClick={addcouriercity}>დაამატე კურიერი</th>
                    </tr>
                </tbody>       
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
            
            <table className="table">
            <thead>
                <tr >
                        <th colSpan={5}>ქალაქი</th>
                        {/* <th>მიწოდების საფასური</th> */}
                    </tr>
            </thead>
            {cities} 
            <tbody >
                <tr id="daamate_qalaqi">
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