import React, { Fragment} from "react";
import "./shoppingcart.css";
import Shekveta from "./shekveta";
import Cartprod from "./cartProd";

function shekveta() {
    document.getElementById("shek").style.visibility = "visible";
};

const ShoppingCart = (props) => {
    
    const cartprodd = props.onshop.map((key) => {

        return(
            <Cartprod 
            onkey={key} 
            onaddCartProdukt={props.onaddCartProdukt}
            />
        ) 
    });

    let jami = 0;
    let dan = 0;
    let tran = 0;

    props.onshop.map((key) => {
        jami += key.fasi * key.raode;
        dan += key.raode * key.prod.fasi;
        return(tran += key.raode)
    });

    if(tran < 100){
        tran = 4;
    }else{
        tran = 0;
    }

    return (
            <Fragment>
                <div className="cart_container">
                    <h2 className="cart_title">საყიდლების კალათი</h2>
                    <hr/>
                    <table className="table">
                        <thead>
                            <tr >
                                <th>პროდუქტის ფოტო</th>
                                <th>პროდუქტის დასახელება</th>
                                <th>რაოდენობა</th>
                                <th>ფასი</th>
                                <th>ჯამი</th>
                                <th> წაშლა სიიდან</th>
                            </tr>
                        </thead>
                        <tbody >
                            {cartprodd}
                        </tbody>
                    </table>
                    <hr/>
                    <div className="cart_boot_div">პროდუქტები<div className="cart_boot_div_r">ლ{jami}</div></div>
                    <hr/>
                    <div className="cart_boot_div">ტრანსპორტირება<div className="cart_boot_div_r">ლ{tran}</div></div>
                    <hr/>
                    <div className="cart_boot_div">დანაზოგი<div className="cart_boot_div_r">{dan - jami}</div></div>
                    <hr/>                   
                    <div className="cart_boot_div">სულ ჯამი<div className="cart_boot_div_r">ლ{jami + tran}</div></div>                   
                    <hr/>
                    <div className="boot_pay_cont">
                        <div className="cart_boot_pay" onClick={shekveta}>შეკვეთა</div>
                        <p id="send_shek" className="send_shek">თქვენი შეკვეთა წარმატებით გაიგზავნა, დაგიკავშირდებით უახლოეს მომავალში.</p>
                    </div>
                    <div id="shek" className="shek"><Shekveta /></div>
                </div> 
            </Fragment>
    )
}

export default ShoppingCart;