import React, { Fragment } from "react";
import './menu.css';

const Menu =() => {
    return (
        <Fragment>
            <div className="menu">
                <ul className="menu_list" >
                    <li className="list">
                        <b className="list_text">სამედიცინო ხელთათმანი</b>
                    </li>
                    <li className="list">
                        <b className="list_text">სამედიცინო პირბადე</b>
                    </li>
                    <li className="list">
                        <b className="list_text">სამედიცინო ნევსი</b>
                    </li>
                </ul>
            </div>
        </Fragment>
    )    
}

export default Menu;