
import { useEffect, useState } from "react";
import Services from "../../pages/service/Service";
import "./widget.css";
import HomeContent from "../../pages/HomeContent";
import { proofRef } from "../../pages/service/proofofpayment/proofRef";
import { onValue } from "firebase/database";

const Widget = ({ type }) => {
    //const [holder, setHolder] = useState(0);

    let data;

    switch (type) {
        case "useraccount":
            data = {
                title: "USERACCOUNT"
            };
            break;

        case "statement":
            data = {
                title: "STATEMENT"
            }
            break;
        case "history":
            data = {
                title: "HISTORY"
            }
            break;

        case "currentbalance":
            data = {
                title: "CURRENTBALANCE"
            };
            break;
        default:
            data = {
                title: "no data found!"
            }
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title }</span>
            </div>
            <div className="right">
            <Services />
            </div>

        </div>
    );
};

export default Widget;