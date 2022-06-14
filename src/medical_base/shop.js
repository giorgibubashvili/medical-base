import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import api from "../server_api/api";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Zoom } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import clos  from "../icons/clos.jpg";

const Shop = (props) => {

    const [name, setname] = useState();
    const Name = (val) => {
        setname(val.target.value);
    }

    const [tel, settel] = useState();
    const Tel = (val) => {
        settel(val.target.value);
    }

    const [addres, setaddres] = useState();
    const Addres = (val) => {
        setaddres(val.target.value);
    }

    const [coment, setcoment] = useState();
    const Coment = (val) => {
        setcoment(val.target.value);
    }

    const [city_id, setcity_id] = useState();
    const [delivery, setdelivery] = useState([]);
    const City_id = (value) => {
        // console.log(city[0].name);
        const cities_list2 = city.filter(id => id.name === value.target.value)
        // console.log(cities_list2[0].delivery_price)
        // console.log(cities_list2[0].id)
        // const val = value.target.value.split(" ");
        setcity_id(cities_list2[0].id);
        setdelivery(cities_list2[0].delivery_price);
    }

    const [city, setcity] = useState([]);
    const [shoping, setshoping] = useState([]); 
    const [sale, setsale] = useState(null);
    const [sum, setsum] = useState(null);
    //  let sum = null;

    const cities = async () => {
        const resp = await api.get("/cities", );
        // console.log(resp);
        setcity(resp.data.cities_list);
        // shopping();
    }

    const cities_list = city.map((id, ind) => {
        return(
            <option key={ind} id={id.id} >{id.name}</option>
        )
    })

    const shopping = async () => {
        const resp = await api.get("/basket", { params: { basket_title: localStorage.getItem("basket_title") } } );
        // console.log(resp);
        setshoping(resp.data.basket.products);
        setsale (resp.data.basket.total_cost);
        setsum(resp.data.basket.saving_amount);
    }

    const del = async (id) => {
        const resp = await api.delete("/basket/" + (localStorage.getItem("basket_title")), {data: {product_id:id}});
        // console.log(resp);
        setshoping(resp.data.basket.products);

        // const shop = async () => {
            // console.log(localStorage.getItem("basket_id"));
            props.shop_cnt();
        shopping();
    }

    // const update = async (product_id, quantity) => {
    //     console.log(quantity);
    //     const resp = await api.put("/basket/" + (localStorage.getItem("basket_title")), {product_id : product_id, quantity : quantity});
    //     console.log(resp);
    //     setshoping(resp.data.basket.products);
    //     setsale (resp.data.basket.total_cost);
    //     setsum(resp.data.basket.saving_amount);
    // }

    useEffect( () => {
        shopping();
    },[]);

    const Sale = async () => {
        // const resp = await 
        api.post("/order", {basket_title: localStorage.getItem("basket_title"), customer_name: name, customer_address: addres, customer_telephone: tel, nearest_city_id: city_id, customer_comment: coment});
        // console.log(resp);
        localStorage.setItem("basket_title", "")
        document.getElementById("win_shekveta").style.visibility="hidden ";
        document.getElementById("sheukvetep").style.visibility="visible";
        document.getElementById("win_shekveta").style.animationName="";
        document.getElementById("sheukvetep").style.animationName="cddc";
    }

    const cartprodd = shoping.map((ke, index) => {
    // console.log(ke)
    // let value_input = ke.quantity;

    const Potos = ke.images.map((idi, ind) => {
        // console.log(idi.img);
        // setprice_id(id i.id);
        // price_id = idi.id;
        return(
            // <Link to={`/product/${ke.id}`} key={ind+"product_shop"} >
                <img className="imagedet" src={idi.img} alt=""   /> 
            // {/* </Link> */}
         
        )
    }) 

        const delpr = () => {
            del(ke.id);
        }

        const update = async (product_id, quantity) => {
        // console.log(quantity);
        const resp = await api.put("/basket/" + (localStorage.getItem("basket_title")), {product_id : product_id, quantity : quantity});
        console.log(resp);
        setshoping(resp.data.basket.products);
        setsale (resp.data.basket.total_cost);
        setsum(resp.data.basket.saving_amount);
    }

        const upd = async (value) => {
            // console.log(value);
           update(value.target.id, value.target.value)
            
        }
        const plus = () => {
            document.getElementById(ke.id).value++;
            update(ke.id, document.getElementById(ke.id).value);
            // console.log(document.getElementById(ke.id).value)

        }
        
        const minus = () => {
            if(document.getElementById(ke.id).value > 1){
                document.getElementById(ke.id).value --;
            }
            update(ke.id, document.getElementById(ke.id).value);
        }

        // const link_det = (v) => {
        //     console.log(v)
        //     return(
        //         <Link to={`/product/${ke.id}`} key={index+"product_shop"}>giorgi</Link>
        //     )
        // }

        // const increment = () =>{
        //     document.getElementById("increminp").value = Number(document.getElementById("increminp").value) + 1;
        //     upd();
        // }

        // const decrement = () =>{
        //     if(Number(document.getElementById("increminp").value) > 1)
        //     document.getElementById("increminp").value =Math.abs(Number(document.getElementById("increminp").value -1));
        //     upd();
        // }

        // setsum(sum + (ke.price * ke.quantity));
        // console.log(ke.quantity * ke.price);

        return(
            <div key={index+"product_shop1"} style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", alignItems:"center"}}>
            {/* <td>foto</td> */}
            <div style={{padding:"20px", alignContent:"center", width:"250px"}}>
             {/* <Link to={`/product/${ke.id}`} key={index+"product_shop"} > */}
                <Carousel className="imagedett" style={{justifyContent:"center",}}>
                        {Potos}
                </Carousel>
                {/* </Link> */}
            </div>
            <div> <h3 >
                <Link to={`/product/${ke.id}`} key={index+"product_shop"} className="title"  >
                    {ke.title}
                </Link>
                 </h3> 
            </div>
            <div style={{justifyContent:"center"}}>
                <div className="increm_input" style={{justifyContent:"center"}}>
                    <div onClick={minus} className="increm">-</div>
                    <div style={{justifyContent:"center"}}><input className="input" value={ke.quantity} id={ke.id} onChange={upd}/></div>
                    <div onClick={plus}  className="increm">+</div>
                </div>
            </div>
            {/* <div>
                <h3 >{ke.final_price}</h3>
            </div> */}
            <div>
                <h3 >{ke.final_total_cost}</h3>
            </div>
            <div>
                <img onClick={delpr} style={{cursor:"pointer",width:"20px", height:"20px"}} src={clos} alt=""/>
            </div>
        </div>
        ) 
    });

    const sheukvete = () => {
        document.getElementById("win_shekveta").style.visibility="visible";
        document.getElementById("win_shekveta").style.animationName="cddc";
    }

    const clos_shek = () => {
        document.getElementById("win_shekveta").style.visibility="hidden";
        document.getElementById("win_shekveta").style.animationName=""
    }

    return(
        <Fragment>
            <div >
                    <h2 style={{paddingLeft:"20px"}}>საყიდლების კალათი</h2>
                    <hr/>
                    {/* <table >
                        <thead>
                            <tr >
                                <th>პროდუქტის ფოტო</th>
                                <th>პროდუქტის დასახელება</th>
                                <th>რაოდენობა</th>
                                <th>ფასი</th>
                                <th>ჯამი</th>
                                <th>წაშლა</th>
                            </tr>
                        </thead>
                        <tbody > */}
                            {cartprodd}
                        {/* </tbody>
                    </table> */}
                    <hr/>
                    <div className="shop_div">პროდუქტები<div >{sum + sale} &#8382; </div></div>
                    <hr/>
                    <div className="shop_div">დანაზოგი<div >{sum} &#8382;</div></div>
                    <hr/>                   
                    <div className="shop_div">სულ ჯამი<div>{sale} &#8382;</div></div>                   
                    <hr/>
                    <div >
                        <div className="signinbut"  onClick={sheukvete} >შეკვეთა</div>
                        <div id="win_shekveta" className="windou_shekveta">
                            <div className="windou2_shekveta">
                                <div className="close" onClick={clos_shek}>X</div>
                                <input className="inpu" onChange={Name} placeholder="სახელი გვარი"></input>
                                <input className="inpu" onChange={Tel} placeholder="ტელრფონი"></input>
                                <input className="inpu" onChange={Addres} placeholder="მისამართი"></input>
                                <select className="inpu" onClick={cities} onChange={City_id}>
                                    <option>ქალაქი</option>
                                    {cities_list}
                                </select>
                                <label style={{display:"block"}}>მიწოდება: {delivery} &#8382;</label>
                                <input className="inpu" onChange={Coment} placeholder="კომენტარი"/>
                                <div className="signinbut" onClick={Sale} >შეუკვეთე</div>
                            </div>
                        </div>
                        <p id="sheukvetep" style={{visibility:"hidden"}} >თქვენი შეკვეთა წარმატებით გაიგზავნა, დაგიკავშირდებით უახლოეს მომავალში.</p>
                    </div>
                </div> 
        </Fragment>
    )
};

export default Shop;