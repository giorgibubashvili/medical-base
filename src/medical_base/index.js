import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Admin from "./admin";
import Proddet from "./proddet";
import Header from "./header";
import Footer from "./footer";
import api from "../server_api/api";
import Product from "./product";
import Courier from "./courier";
import Shop from "./shop";
import Shekveta from "./shekveta";
// import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import slide1  from "../icons/slide1.jpg";
// import slide2  from "../icons/slide2.jpg";
// import slide3  from "../icons/slide3.jpg";
// import slide4  from "../icons/slide4.jpg";
// import slide5  from "../icons/slide5.jpg";

const Medical = () => {

    const [cnt, setcnt] = useState();
    const shopping = async () => {
        const resp = await api.get("/basket", { params: { basket_title: localStorage.getItem("basket_title") } } );
        // console.log(resp);
        setcnt(resp.data.basket.products.length);
    }

const [products, setproducts] = useState([]); 
// const [cnt, setcnt] = useState(); 
// console.log(cnt);
    const addproduct = async () => {
        const resp = await api.get("/products");
        setproducts(resp.data.product_list);
    }
    const prod = products.map((_key, cnt) => {
            return(<Product key={cnt} value={_key} shop_cnt={shopping}/>)
        })

    useEffect( () => { 
        addproduct();
    },[]);

    useEffect( () => { 
        shopping();
    },[]);

    return(
         <Fragment>
            <Admin onad={addproduct}/>
            <Router>
                <Header onad={addproduct} cnt={cnt} />
                    {/* <Fade className="slide" autoplay="none">
                        <img className="slid" src={slide1} alt=""/>
                        <img className="slid" src={slide2} alt=""/>
                        <img className="slid" src={slide3} alt=""/>
                        <img className="slid" src={slide4} alt=""/>
                        <img className="slid" src={slide5} alt=""/>
                    </Fade> */}
                
                <Switch>
                    <Route exact path="/" >
                        <div className="productsdiv">{prod} </div>
                    </Route>
                    <Route path={"/product/:id"} >
                        <Proddet onad={addproduct} shop_cnt={shopping} />
                    </Route>
                    <Route path="/couriers" >
                        <Courier />
                    </Route>
                    <Route path="/shop" >
                        <Shop shop_cnt={shopping} />
                    </Route>
                    <Route path="/shekveta" >
                        <Shekveta />
                    </Route>
                </Switch>    
            </Router> 
            <Footer/>
        </Fragment> 
    )
};

export default Medical;