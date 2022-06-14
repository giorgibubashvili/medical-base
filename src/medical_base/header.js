import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './header.css';
import api from "../server_api/api";
import shopicon from "../icons/shopicon.jpg";
import searchicon from "../icons/searchicon.png";
import { BsSearch } from 'react-icons/bs';
// import { useHistory } from "react-router-dom";

const Header = (props) => {

    const [username, setusername] = useState();
    const Username = (val) => {
        setusername(val.target.value);
        document.getElementById("shenishvna").textContent = "";
    }

    const [password, setpassword] = useState();
    const Password = (val) => {
        setpassword(val.target.value);
        document.getElementById("registrshenishvna").textContent = "";
        document.getElementById("shenishvna").textContent = "";
    }

    const [name, setname] = useState();
    const Name = (val) => {
        setname(val.target.value);
        document.getElementById("registrshenishvna").textContent = "";
    }

    const [surname, setsurname] = useState();
    const Surname = (val) => {
        setsurname(val.target.value);
        document.getElementById("registrshenishvna").textContent = "";
    }

    const [telephone, settelephone] = useState();
    const Telephone = (val) => {
        settelephone(val.target.value);
        document.getElementById("registrshenishvna").textContent = "";
    }

    const [email, setemail] = useState();
    const Email = (val) => {
        setemail(val.target.value);
        document.getElementById("registrshenishvna").textContent = "";
    }

    const sign = () => {
        if(document.getElementById("signin").textContent === "ავტორიზაცია"){
            document.getElementById("signd").style.animationName="cddc";
            document.getElementById("user").value="";
            document.getElementById("pass").value="";
            document.getElementById("shenishvna").textContent = ""; 
        }
    }

    const signout = async () => {
        api.post("/logout", {}, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}});
        api.post("/logout2", {}, {headers: {Authorization: "Bearer " + localStorage.getItem("refresh_token")}});
     };

        const re = async () => {
            
        await api.get("/profile", {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}})
        .then(response => {
            localStorage.setItem("status", response.data.permission);
            // props.setuser_status(response.data.permission);
            console.log(response)
            let name = response.data.name;
            document.getElementById("signd").style.animationName = "";
            document.getElementById("signin").textContent = name;
            document.getElementById("registr").textContent="გასვლა";

            if(localStorage.getItem("status") === "courier"){
            //    document.getElementById("shekvetebi_button").style.visibility = "visible";
            document.getElementById("shekvetebi_button").style.visibility = "visible";
            document.getElementById("shekvetebi_button").style.position = "static";
            }
           
           if(localStorage.getItem("status") === "admin"){
            // document.getElementById("shekvetebi_button").style.visibility = "visible";
            document.getElementById("shekvetebi_button").style.visibility = "visible";
            document.getElementById("shekvetebi_button").style.position = "static";
            document.getElementById("add").style.visibility = "visible";
            document.getElementById("daamate_curierad").style.visibility = "visible";
            document.getElementById("daamate_kurieri").style.visibility = "visible";
            document.getElementById("update").style.visibility = "visible";
        }
        })
        .catch(error => {
            console.log(error.response);
            localStorage.setItem("status", "");
        }); 
           
    }

    useEffect( () => { 
        re(); 
    },[]);

    const registracia = () => {
        if(document.getElementById("registr").textContent === "გასვლა"){
            document.getElementById("registr").textContent = "რეგისტრაცია";
            document.getElementById("signin").textContent = "ავტორიზაცია";
            signout();
            localStorage.setItem("access_token", "");
            localStorage.setItem("status", "");
            // props.setuser_status("user");
            document.getElementById("shekvetebi_button").style.visibility = "hidden";
            document.getElementById("shekvetebi_button").style.position = "absolute";
            document.getElementById("add").style.visibility = "hidden";

        }else{
            document.getElementById("registrshenishvna").textContent = "";
            document.getElementById("regist").style.animationName="cddc";
            document.getElementById("nam").value="";
            document.getElementById("sur").value="";
            document.getElementById("tel").value="";
            document.getElementById("mai").value="";
            document.getElementById("pas").value="";
        }
        
    }

    const add = async () => {
        
        await api.post("/register", {name, surname, email, telephone, password})
        .then(response => {
                // document.getElementById("registrshenishvna").textContent = "";
                // document.getElementById("registrshenishvna").style.color = "";
                document.getElementById("regist").style.animationName="";
                console.log(response);
        })
        .catch(error => {
            if(error.response.status === 400){
                document.getElementById("registrshenishvna").textContent = "შეავსე გამოტოვებული ველი";
                document.getElementById("registrshenishvna").style.color = "red";
            }
            console.log(error.response);
        })
    }

    // const status = (v) => {
    //     if(v === "courier"){
    //         document.getElementById("shekvetebi_button").style.visibility = "visible";
    //     }else{
    //         document.getElementById("shekvetebi_button").style.visibility = "hidden";
    //     }
    // }

    const signin = async () => {
        await api.post("/login", {"email": username, "password": password})
        .then(response => {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);
            // console.log(response);
            localStorage.setItem("status", response.data.user.permission);
            // props.setuser_status(response.data.user.permission)
            // let v = response.data.user.permission;
            // status(v);
            // document.getElementById("add").style.visibility = "visible";
            let name = response.data.user.name;
            document.getElementById("signd").style.animationName = "";
            document.getElementById("signin").textContent = name;
            document.getElementById("registr").textContent="გასვლა";
            if(localStorage.getItem("status") === "courier"){
                document.getElementById("shekvetebi_button").style.visibility = "visible";
                document.getElementById("shekvetebi_button").style.position = "static";
                // document.getElementById("shekvetebi_button").style.display = "flex";
                // console.log("gio")
             }
            
            if(localStorage.getItem("status") === "admin"){
             document.getElementById("shekvetebi_button").style.visibility = "visible";
             document.getElementById("shekvetebi_button").style.position = "static";
            // document.getElementById("shekvetebi_button").style.display = "flex";
             document.getElementById("add").style.visibility = "visible";
            //  document.getElementById("daamate_curierad").style.visibility = "visible";
            //  document.getElementById("daamate_kurieri").style.visibility = "visible";
            //  document.getElementById("update").style.visibility = "visible";
         }
            
        })
        .catch(error => {
            console.log(error.response.status)
            if(error.response.status === 400){
                document.getElementById("shenishvna").textContent = "პაროლი არასწორია";
                document.getElementById("shenishvna").style.color = "red";
            }

            if(error.response.status === 404){
                document.getElementById("shenishvna").textContent = "მომხმარებელი არ არის რეგისტრირებული";
                document.getElementById("shenishvna").style.color = "red";
            }
        });
    }

    const clos = () => {
        document.getElementById("signd").style.animationName="";
        document.getElementById("regist").style.animationName="";
    }

    // const history = useHistory();
    // const handleClick = (path) => {
    //     if(isNaN(path))
    //         return;
    //     history.push(path);
    // }

    const [serch, setserch] = useState([]);

    const search = async (value) => {
        // console.log(value.target.value);
        if(value.target.value.length === 0){
            setserch([]);
            return
        }
        const response = await api.get("/products/search?title="+value.target.value, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}})
        console.log(response);
        setserch(response.data.products);
    }

    // useEffect( () => { 
    //     serch_map(); 
    // },);

   

    const serch_map = serch.map((value, index) => {
        console.log(value)
        return(
            <ul className="serch_list" >
                <Link className="serch_li" to={`/product/${value.id}`} style={{textDecoration:"none"}} onClick={() => {document.getElementById("serch_inpu").value = ""; setserch([])}} >
                   <li  key={"search"+index} style={{alignItems:"center", display:"flex" }} >
                    <img src={value.images[0].img} style={{width:"40px", height:"40px"}} />
                    <div>
                        {value.title} {value.size}
                    </div>
                </li> 
                </Link>
                
            </ul>
        )
    })

    return (
        <Fragment>
            <div className="header">
                <div className="header_top">
                    <Link to="/" className="headertitle" onClick={props.onad}>MEDICAL-BASE</Link>
                    <div className="shop_icn">
                        {/* <div onClick={() => handleClick(props.cnt > 0 ? "/shop" : NaN)}>
                            <img className="shop_icon" src={shopicon} alt=""/>
                        </div> */}
                        <Link to="/shop" >
                            <img className="shop_icon" src={shopicon} alt=""/>
                        </Link>
                        <div id="shoppiconeint" className="shoppiconn" >{props.cnt}</div>
                    </div>
                    
                    <Link to="/couriers" className="courierbut" >კონტაქტი</Link>
                </div>
                <div className="header_down" >
                    <Link to="/shekveta" className="courierbut" style={{position:"absolute", width:"min-content", marginLeft:"auto", marginRight:"auto"}} id="shekvetebi_button" >შეკვეთები</Link>
                    
                    <div >
                       <input className="inpu" id="serch_inpu" placeholder="ძიება" onChange={search} /> 
                       <div className="search_list" >
                           {serch_map }
                       </div>
                    </div>

                    <div id="signin" className="signin" onClick={sign}>ავტორიზაცია</div>
                    <div id="registr" className="registr" onClick={registracia}>რეგისტრაცია</div>
                </div>
            </div>
            <div id="signd" className="signd" >
                <div id="sign" className="sign">
                <div className="close" onClick={clos}>X</div>
                <div><input id="user" className="inpu" onChange={Username} type="text" placeholder="მაილი" defaultValue=""/></div>
                <div><input id="pass" className="inpu" onChange={Password} type="password" placeholder="პაროლი" defaultValue=""/></div>
                <div className="signinbut" onClick={signin}>შესვლა</div>
                <div id="shenishvna"></div>
                </div>
            </div>
            
            <div id="regist" className="signd">
                <form className="sign">
                    <div className="close" onClick={clos}>X</div>
                    <input id="mai" className="inpu" onChange={Email} type="email" placeholder="მაილი"/>
                    <input id="nam" className="inpu" onChange={Name}type="text" placeholder="სახელი"/>
                    <input id="sur" className="inpu" onChange={Surname} type="text" placeholder="გვარი"/>
                    <input id="tel" className="inpu" onChange={Telephone} type="tel" placeholder="ტელეფონი"/>
                    <input id="pas" className="inpu" onChange={Password} type="password"  placeholder="პაროლი"/>
                    <div className="signinbut" onClick={add}>რეგისტრაცია</div>
                    <div id="registrshenishvna"></div>
                </form>
            </div>
        </Fragment>
    )
    
}

export default Header;