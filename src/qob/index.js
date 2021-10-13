import React, { Fragment, useState } from "react";
import Body from "./body.js"
import Footer from "./footer.js";
import Kontakt from "./kontakt";
import { Router } from "@reach/router";
import ProdDet from "./prod_det.js";
import ShoppingCart from "./shoppingcart.js";
import Admin from "./admin.js";
import Heder from "./header.js";

let idi=0;

const Qob = () => {

    //const [detidi, setdetidi] = useState();
    const [produkt, setProdukt] = useState([]);
    const [produktcart, setProduktcart] = useState([]);
    let [shopicon, setshopicon] = useState(0);


    const addNewProdukt = (img1,img2,img3, name, fasi, com, sale1min, sale1max, sale1pr, sale2min, sale2max, sale2pr, sale3min, sale3max, sale3pr, sale4min, sale4max, sale4pr, sale5min, sale5max, sale5pr, sale6min, sale6max, sale6pr) => {
        setProdukt([...produkt, {id: ++idi, img1, img2, img3, name, fasi, com, sale1min, sale1max, sale1pr, sale2min, sale2max, sale2pr, sale3min, sale3max, sale3pr, sale4min, sale4max, sale4pr, sale5min, sale5max, sale5pr, sale6min, sale6max, sale6pr}]);
    };
    const addCartProdukt = (prod, raode, fasi) => {
        let cnt = 0;
        let cart = 0;
        produktcart.map((key) => {
            
            if(key.prod.id === prod.id){
                key.raode += Number(raode);
                cnt++;
                key.fasi = fasi;  
            } 
            cart += key.raode;
            return(cnt) 
        });
            if(cnt === 0){
                setProduktcart([...produktcart, {prod, raode, fasi}]);  
                cart += raode;
            }; 
            setshopicon(cart);
    };

    return (
        <Fragment>
            <Heder path="/" onproduktcard={shopicon} />        
            <Router>
                <Admin path="/admin" onaddnewprodukt={addNewProdukt}/>
                <ShoppingCart path="/shoppingcart" onshop={produktcart} onaddCartProdukt={addCartProdukt}/>
                <Kontakt path="/kontakt" />
                <Body path="/" onprod={produkt} onaddCartProdukt={addCartProdukt} />
                <ProdDet path="/produkt" />
            </Router>
            <Footer /> 
        </Fragment>
    )
}


export default Qob;