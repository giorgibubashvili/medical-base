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

const Medical = () => {

const [products, setproducts] = useState([]); 
//const [sum, setsum] = useState(3); 

    const addproduct = async () => {
        const resp = await api.get("/products");
        setproducts(resp.data.product_list);
    }
    const prod = products.map((_key) => {
            return(<Product key={_key.id} value={_key} />)
        })

    useEffect( () => { 
        addproduct();
    },[]);

    return(
         <Fragment>
            <Admin onad={addproduct}/>
            <Router>
                <Header onad={addproduct}  />
                <Switch>
                    <Route exact path="/" >
                        <div className="productsdiv">{prod} </div>
                    </Route>
                    <Route path={"/product/:id"} >
                        <Proddet onad={addproduct}/>
                    </Route>
                    <Route path="/couriers">
                        <Courier />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                </Switch>    
            </Router> 
            <Footer/>
        </Fragment> 
    )
};

export default Medical;