//import { Link } from "@reach/router";
import { Fragment, useState} from "react";
import React from "react";

const Admin = (props) => {

    const [poto1, setPoto1] = useState("");

    const addpoto1 = (val) => {
        setPoto1(val.target.value);
    };

    const [poto2, setPoto2] = useState("");

    const addpoto2 = (val) => {
        setPoto2(val.target.value);
    };

    const [poto3, setPoto3] = useState("");

    const addpoto3 = (val) => {
        setPoto3(val.target.value);
    };

    const [name, setName] = useState([]);

    const addname = (val) => {
        setName(val.target.value);
    };

    const [fasi, setFasi] = useState([]);

    const addfasi = (val) => {
        setFasi(val.target.value);
    };

    const [com, setCom] = useState("");

    const addcom = (val) => {
        setCom(val.target.value);
    };

    const [sale1min, setSale1min] = useState([]);

    const addsale1min = (val) => {
        setSale1min(val.target.value);
    };

    const [sale1max, setSale1max] = useState([]);

    const addsale1max = (val) => {
        setSale1max(val.target.value);
    };

    const [sale1pr, setSale1pr] = useState([]);

    const addsale1pr = (val) => {
        setSale1pr(val.target.value);
    };

    const [sale2min, setSale2min] = useState([]);

    const addsale2min = (val) => {
        setSale2min(val.target.value);
    };

    const [sale2max, setSale2max] = useState([]);

    const addsale2max = (val) => {
        setSale2max(val.target.value);
    };

    const [sale2pr, setSale2pr] = useState([]);

    const addsale2pr = (val) => {
        setSale2pr(val.target.value);
    };

    const [sale3min, setSale3min] = useState([]);

    const addsale3min = (val) => {
        setSale3min(val.target.value);
    };

    const [sale3max, setSale3max] = useState([]);

    const addsale3max = (val) => {
        setSale3max(val.target.value);
    };

    const [sale3pr, setSale3pr] = useState([]);

    const addsale3pr = (val) => {
        setSale3pr(val.target.value);
    };

    const [sale4min, setSale4min] = useState([]);

    const addsale4min = (val) => {
        setSale4min(val.target.value);
    };

    const [sale4max, setSale4max] = useState([]);

    const addsale4max = (val) => {
        setSale4max(val.target.value);
    };

    const [sale4pr, setSale4pr] = useState([]);

    const addsale4pr = (val) => {
        setSale4pr(val.target.value);
    };

    const [sale5min, setSale5min] = useState([]);

    const addsale5min = (val) => {
        setSale5min(val.target.value);
    };

    const [sale5max, setSale5max] = useState([]);

    const addsale5max = (val) => {
        setSale5max(val.target.value);
    };

    const [sale5pr, setSale5pr] = useState([]);

    const addsale5pr = (val) => {
        setSale5pr(val.target.value);
    };

    const [sale6min, setSale6min] = useState([]);

    const addsale6min = (val) => {
        setSale6min(val.target.value);
    };

    const [sale6max, setSale6max] = useState([]);

    const addsale6max = (val) => {
        setSale6max(val.target.value);
    };

    const [sale6pr, setSale6pr] = useState([]);

    const addsale6pr = (val) => {
        setSale6pr(val.target.value);
    };
    //console.log(value);


    const addprod = () =>{
        
        props.onaddnewprodukt(poto1, poto2, poto3, name, Number(fasi), com, Number(sale1min), Number(sale1max), Number(sale1pr), Number(sale2min), Number(sale2max), Number(sale2pr), Number(sale3min), Number(sale3max), Number(sale3pr), Number(sale4min), Number(sale4max), Number(sale4pr), Number(sale5min), Number(sale5max), Number(sale5pr), Number(sale6min), Number(sale6max), Number(sale6pr));
        
    };

//props.onaddnewprodukt("img", "name", "fasi", "com", "sale");
    return (
        <Fragment>
            
            <p>შეიყვანე ფოტო 1</p>
            <input onChange={addpoto1} type="file"></input>
            <p>შეიყვანე ფოტო 2</p>
            <input onChange={addpoto2} type="file"></input>
            <p>შეიყვანე ფოტო 3</p>
            <input onChange={addpoto3} type="file"></input>
            <p>შეიყვანე პროდუქტის სახელი</p>
            <input onChange={addname}></input>
            <p>შეიყვანე ფასი</p>
            <input onChange={addfasi}></input>
            <p>შეიყვანე კომენტარი</p>
            <input onChange={addcom}></input>
            <p>ფასდაკლება 1 მინ</p>
            <input onChange={addsale1min}></input>
            <p>ფასდაკლება 1 მაქს</p>
            <input onChange={addsale1max}></input>
            <p>ფასდაკლება 1 %</p>
            <input onChange={addsale1pr}></input>
            <p>ფასდაკლება 2 მინ</p>
            <input onChange={addsale2min}></input>
            <p>ფასდაკლება 2 მაქს</p>
            <input onChange={addsale2max}></input>
            <p>ფასდაკლება 2 %</p>
            <input onChange={addsale2pr}></input>
            <p>ფასდაკლება 3 მინ</p>
            <input onChange={addsale3min}></input>
            <p>ფასდაკლება 3 მაქს</p>
            <input onChange={addsale3max}></input>
            <p>ფასდაკლება 3 %</p>
            <input onChange={addsale3pr}></input>
            <p>ფასდაკლება 4 მინ</p>
            <input onChange={addsale4min}></input>
            <p>ფასდაკლება 4 მაქს</p>
            <input onChange={addsale4max}></input>
            <p>ფასდაკლება 4 %</p>
            <input onChange={addsale4pr}></input>
            <p>ფასდაკლება 5 მინ</p>
            <input onChange={addsale5min}></input>
            <p>ფასდაკლება 5 მაქს</p>
            <input onChange={addsale5max}></input>
            <p>ფასდაკლება 5 %</p>
            <input onChange={addsale5pr}></input>
            <p>ფასდაკლება 6 მინ</p>
            <input onChange={addsale6min}></input>
            <p>ფასდაკლება 6 მაქს</p>
            <input onChange={addsale6max}></input>
            <p>ფასდაკლება 6 %</p>
            <input onChange={addsale6pr}></input>


            <div onClick={addprod}>დამატება</div>
        </Fragment>   
    );
};

export default Admin;