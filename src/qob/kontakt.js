import React, { Fragment } from "react";
import "./kontakt.css";

export default class Kontakt extends React.Component {

    render() {

        return (
            
            <Fragment>
                <div className="konta">
                    <div>
                    <table className="table">
                        <thead>
                            <tr >
                                <th>რეგიონი</th>
                                <th>ქალაქი</th>
                                <th>სახელი</th>
                                <th>ტელეფონი</th>
                                <th>მაილი</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr >
                                <td>იმერეთი</td>
                                <td>ქუთაისი</td>
                                <td>ნიკა</td>
                                <td>598 360 361</td>
                                <td>ნიკა@მაილ.რუ</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}