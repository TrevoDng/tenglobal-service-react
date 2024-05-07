
import React, { useState } from "react";
import UserAcount from "../../../userprofile/UserProfile";
import Statement from "../statement/Statement";
import History from "../history/History";
import CurrentBalance from "../CurrentBalance";
import SendProofCollectData from "../proofofpayment/SendProofCollectData";

const ServiceList = ({ type }) => {
    const [holder, setHolder] = useState(0);

    let data;

    switch (type) {
        case "useraccount":
            data = {
                title: "USERACCOUNT",
                content: <UserAcount />
            };
            break;

        case "statement":
            data = {
                title: "STATEMENT",
                content: <Statement />
            }
            break;
        case "history":
            data = {
                title: "HISTORY",
                content: <History />
            }
            break;

        case "currentbalance":
            data = {
                title: "CURRENTBALANCE",
                content: <CurrentBalance />
            };
            break;
              case "currentbalance":
            data = {
                title: "CURRENTBALANCE",
                content: <CurrentBalance />
            };
            break;
        case "proof":
            data = {
            title: "PROOF OF PAYMENT",
            content: <SendProofCollectData />
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
                <span className="title">{data.title}</span>
                <div className="content" style={{backgroundColor: "lightblue"}}>{data.content}</div>
            </div>
            <div className="right">
          
            </div>
        </div>
    );
};

export default ServiceList;