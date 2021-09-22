import React, {Fragment} from "react";
import './produkt.css';
import shavixel from "../icons/shavixel.jpg";
import lurjixel from "../icons/lurjixel.jpg";
import shopicon from "../icons/shopicon.png";
import lovicon from "../icons/lovicon.jpg";

export default class Produkt extends React.Component {
    
    render() {

let dzf = 10;
let axf = 8;
let prc =100 / (dzf / (dzf - axf));

        return (
            <Fragment>
                <div className="produkt_container">
                    <div className="produkt">
                        <div className="product">
                            <img className="product_img" src={shavixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">{prc}%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი შავი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ{dzf}</h4>
                                <h3 className="fasi_aris">ლ{axf}</h3>
                        </div>
                    </div>
                    <div className="produkt">
                    <div className="product">
                            <img className="product_img" src={lurjixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი ლურჯი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                        <div className="product">
                            <img className="product_img" src={shavixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი შავი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                    <div className="product">
                            <img className="product_img" src={lurjixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი ლურჯი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                        <div className="product">
                            <img className="product_img" src={shavixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი შავი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                    <div className="product">
                            <img className="product_img" src={lurjixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი ლურჯი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                        <div className="product">
                            <img className="product_img" src={shavixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი შავი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                    <div className="product">
                            <img className="product_img" src={lurjixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი ლურჯი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                        <div className="product">
                            <img className="product_img" src={shavixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი შავი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                    <div className="product">
                            <img className="product_img" src={lurjixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი ლურჯი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                        <div className="product">
                            <img className="product_img" src={shavixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი შავი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                    <div className="produkt">
                    <div className="product">
                            <img className="product_img" src={lurjixel} alt="" />
                            <div className="producticon">
                                <img className="shopicon" src={shopicon} alt="" />
                                <img className="lovicon" src={lovicon} alt="" />
                                <label className="product_pr">9%</label>
                            </div> 
                        </div>
                        <h2 className="product_name">სამედიცინო ხელთათმანი ლურჯი ფერის</h2>
                        <div className="product_raodenoba">
                            <button className="product_raodenoba_but">-</button>
                            <input className="product_raodenoba_in"></input>
                            <button className="product_raodenoba_but">+</button>
                        </div>
                        <div className="product_fasi">
                                <h4 className="fasi_iyo">ლ2.50</h4>
                                <h3 className="fasi_aris">ლ7.55</h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}