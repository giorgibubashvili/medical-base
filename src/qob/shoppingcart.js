import React, { Fragment } from "react";
import "./shoppingcart.css";
import { Link } from "@reach/router";
import shavixel from "../icons/shavixel.jpg";
import lurjixel from "../icons/lurjixel.jpg";

export default class ShoppingCart extends React.Component {
    render() {
        
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
                            <tr >
                                <td><Link to="/produkt" >< img className="cart_img" src={shavixel} alt="" /></Link> </td>
                                <td><Link to="/produkt" className="cart_product_name">სამედიცინო ხელთათმანი შავი ფერის </Link> </td>
                                <td>
                                    <div className="cart_raod">
                                        <div><h2>-</h2></div>
                                        <div><h2>1</h2></div>
                                        <div><h2>+</h2></div>
                                    </div>
                                </td>
                                <td>
                                        <h3 >ლ8</h3>
                                </td>
                                <td>
                                        <h3 >8</h3>
                                </td>
                                <td>
                                        <h1>X</h1>
                                </td>
                            </tr>
                            
                            <tr >
                                <td>< img className="cart_img" src={lurjixel} alt="" /></td>
                                <td>სამედიცინო ხელთათმანი ლურჯი ფერის </td>
                                <td>
                                    <div className="cart_raod">
                                        <div ><h1>-</h1></div>
                                        <div><h1>1</h1></div>
                                        <div ><h1>+</h1></div>
                                    </div>
                                </td>
                                <td>
                                    <div >
                                        <h3 >ლ8</h3>
                                    </div>
                                </td>
                                <td>
                                    <div >
                                        <h3 >8</h3>
                                    </div>
                                </td>
                                <td>
                                    <div >
                                        <h1>X</h1>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <div className="cart_boot_div">პროდუქტები<div className="cart_boot_div_r">ლ8</div></div>
                    <hr/>
                    <div className="cart_boot_div">ტრანსპორტირება<div className="cart_boot_div_r">ლ1</div></div>
                    <hr/>
                    <div className="cart_boot_div">შეფუთვის ღირებულება<div className="cart_boot_div_r">ლ0.5</div></div>
                    <hr/>                   
                    <div className="cart_boot_div">სულ ჯამი<div className="cart_boot_div_r">ლ9.5</div></div>                   
                    <hr/>
                    <div className="cart_boot_pay">ყიდვა</div>
                    
                </div> 
            </Fragment>
        )
    }
}