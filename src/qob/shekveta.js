import React, { Fragment } from "react";
import "./shekveta.css";

function send_shek() {
    document.getElementById("send_shek").style.visibility = "visible";
    document.getElementById("shek").style.visibility = "hidden";
    document.getElementById("qutaisi").type = "hidden";
    document.getElementById("tbilisi").type = "hidden";
};

function closshek() {
    document.getElementById("shek").style.visibility = "hidden";
    document.getElementById("qutaisi").type = "hidden";
    document.getElementById("tbilisi").type = "hidden";
};

function qalaqi() {
    document.getElementById("qalaqi").value=""
    document.getElementById("qutaisi").type = "button";
    document.getElementById("tbilisi").type = "button";
};

 function archqal() {
    document.getElementById("qalaqi").value=12;
    document.getElementById("qutaisi").type = "hidden";
    document.getElementById("tbilisi").type = "hidden";
};

export default class Shekveta extends React.Component {
    
    render() {
        return (
            <Fragment>
                <div className="Shekveta">
                    <div onClick={closshek} className="clos_buut">დახურვა</div>
                    <hr/>
                    {/* <p>regioni</p> */}
                    <p>ქალაქი</p>
                    <input id="qalaqi" onClick={qalaqi} className="in" />
                    <div className="qalaqi_div">
                        <input id="qutaisi" type="hidden" value="ქუთაისი" className="qalaqi" onClick={archqal}/>
                        <input id="tbilisi" type="hidden" value="თბილისი" className="qalaqi" onClick={archqal}/>
                    </div>
                    
                    <p>მისამართი</p>
                    <input className="in" />
                    <p>ტელეფონის ნომერი</p>
                    <input className="in" placeholder="595 123 123" />
                    <hr/>
                    <div className="shek_buut"><div className="shek_buut_name" onClick={send_shek}>შეკვეთა</div></div>
                    
                </div>
            </Fragment>
        )
    }
}