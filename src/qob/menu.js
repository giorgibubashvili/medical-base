import React, { Fragment } from "react";
import './menu.css';

export default class Menu extends React.Component {
    render() {

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
}