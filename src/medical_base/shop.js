import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import api from "../server_api/api";

const Shop = () => {

    const [shoping, setshoping] = useState([]); 
    const [sale, setsale] = useState();
    let sum = null;

    const shopping = async () => {
        const resp = await api.get("/basket", { params: { basket_id: localStorage.getItem("basket_id") ? localStorage.getItem("basket_id") : 0 } } );
        console.log(resp);
        setshoping(resp.data.basket.products);
        setsale (resp.data.basket.total_cost);
    }

    const del = async (id) => {
        const resp = await api.delete("/basket/" + (localStorage.getItem("basket_id") ? localStorage.getItem("basket_id") : 0), {data: {product_id:id}});
        console.log(resp);
        setshoping(resp.data.basket.products);
        //shopping();
    }

    const update = async (product_id, quantity) => {
        const resp = await api.put("/basket/" + (localStorage.getItem("basket_id") ? localStorage.getItem("basket_id") : 0), {product_id : product_id, quantity : quantity});
        console.log(resp);
        setshoping(resp.data.basket.products);
    }

    useEffect( () => {
        shopping();
    },[]);

    const cartprodd = shoping.map((key) => {
    
        const delpr = () => {
            del(key.id);
        }

        const upd = (value) => {
            //console.log(value.target.value);
            update(key.id, value.target.value);
        }

        sum += key.price * key.quantity;

        return(
            <tr >
            <td>foto</td>
            <td> <h3 >{key.title}</h3> </td>
            <td>
                <div >
                    <div><h2  >-</h2></div>
                    <div><input onChange={upd}/></div>
                    <div><h2  >+</h2></div>
                </div>
            </td>
            <td>
                <h3 >{key.final_price}</h3>
            </td>
            <td>
                <h3 >{key.final_total_cost}</h3>
            </td>
            <td>
                <h1 onClick={delpr}>X</h1>
            </td>
        </tr>
        ) 
    });

    return(
        <Fragment>
            <div >
                    <h2 >საყიდლების კალათი</h2>
                    <hr/>
                    <table >
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
                    <div className="shop_div">პროდუქტები<div >{sum}ლ</div></div>
                    <hr/>
                    <div className="shop_div">დანაზოგი<div >{sum - sale}ლ</div></div>
                    <hr/>                   
                    <div className="shop_div">სულ ჯამი<div>{sale}ლ</div></div>                   
                    <hr/>
                    <div >
                        <div className="signinbut" >შეკვეთა</div>
                        <p >თქვენი შეკვეთა წარმატებით გაიგზავნა, დაგიკავშირდებით უახლოეს მომავალში.</p>
                    </div>
                    
                </div> 
        </Fragment>
    )
};

export default Shop;