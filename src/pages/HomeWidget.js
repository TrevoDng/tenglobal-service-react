
import { Link, useNavigate } from "react-router-dom";


import './HomeContent.css';


const HomeWidget = ({ type }) => {

    const homeContent = 0;
    const proofOfment = 1;
    const statement = 2;
    const history  = 3;
    const currentBalance  = 4;
    const accountDetails = 5;

  let textOut = {};

  const navigate = useNavigate();
 // useHolder(holder);


    const SetFirebaseData =({username, account, name, countryName}) => {
        return (
            <>
            
            <p style={{color: "black"}}>Account Holder Name: { name }</p>
            <p style={{margin: "0px 10px 40px 10px", color: "black", fontSize: "16px"}} className="read-course-p">Account number: { countryName }</p>
            </>
        )
    }

    const ShowFireBaseData = (props) => {
        const arr = props.data;
        
        return (
            <>
            
                {
                arr.map((value, index) => (
                    <SetFirebaseData key={index} username={value.username} account={value.account} countryName={value.countryName} name={value.name} />
                    ))
                } 
         
            </>     
        )
    }

    let data;

    switch (type) {
        case "homecontent":
            data = {
                title: "Home ",
                action: "sendproofofpayment",
                holder: homeContent,
                class_name:"fa-regular fa-paper-plane",
                item_color: "red",
            };
        case "sendproofofpayment":
            data = {
                title: "Send Proof",
                action: "sendproofofpayment",
                holder: proofOfment,
                class_name:"fa-regular fa-paper-plane",
            };
            break;
        case "accountdetails":
            data = {
                title: "Account",
                action: "accountdetails",
                holder: accountDetails,
                class_name :"fa-solid fa-money-check"
            };
            break;

        case "statement":
            data = {
                title: "Statement",
                action: "statement",
                holder: statement,
                class_name: "fa-solid fa-file"
            }
            break;
        case "history":
            data = {
                title: "History",
                action: "history",
                holder: history,
                class_name: "fa-solid fa-clock-rotate-left"
            }
            break;

        case "currentbalance":
            data = {
                title: "Balance",
                action: "currentbalance",
                holder: currentBalance,
                class_name :"fa-solid fa-money-check"
            };
            break;
        default:
            data = {
                title: "no data found!",
                holder: homeContent,
            }
            break;
    }


//these element should be inside ul element
    return (
        <div className="home-main-container">
            <div 
            className="home-container-div" 
            onClick={() => navigate(data.action)}
            style={{}}>
            <li className="read-course-li" key={"projects.userId"} >
                <h3 className="title" style={{margin: "10px 5px 0px 10px", color: "GrayText", fontSize: "14px"}}>{data.title}</h3>  
                <div className="read-course-input">
                    <span style={{textAlign:"center", color:"gray", fontSize: "12px", padding: "5px"}}>{data.title}</span>
                    <div className="iconCover" style={{textAlign:"center"}}>
                    <i className={data.class_name}                    
                    style={{
                        fontSize: "40px",
                        listStyle: "none"}}></i>
                    </div>
                </div> 
            </li>
        </div>
    
        </div>
    );
};

export default HomeWidget;