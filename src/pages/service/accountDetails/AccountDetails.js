
import { useEffect, useState } from "react";
import * as React from "react";
import { onValue } from "firebase/database"; 
import { Link, useNavigate } from "react-router-dom";
import { makeAccountNumber } from "../proofofpayment/randomstring/RandomReference";
import { userRef } from "../../login/RegisterRef";
import { Stack, Button } from "@mui/material";
import "./AccountDetails.css";
import { auth } from "../../../firebase";
import Navbar from "../../navbar/Navbar";

const AccountDetails = ({ type, action }) => {

    const [projects, setProjects] = useState([]);
    const [myUserId, setMyUserId] = useState("");
   
      useEffect(() => {
      
          //set user id/ but i have to get id from firebase
          try {
            const userId = auth.currentUser.uid;
            setMyUserId(userId);
         } 
         catch {
            console.log("failed to get user id");
         } 
  
          const query = userRef(myUserId);
          return onValue(query, (snapshot) => {
              const myData = snapshot.val();
      
              if(snapshot.exists()) {
                  Object.values(myData).map((project) => {
                      setProjects((projects) => [...projects, project])
                      console.log(project);
                  });
              }
          })}, []);
  
      const SetFirebaseData =({username, account}) => {
          return (
              <>
              <p style={{color: "gray", fontSize: "16px"}}>Account Holder Name: { username }</p>
              <p style={{margin: "0px 10px 60px 10px", color: "gray", fontSize: "16px"}} className="read-course-p">Account number: { account }</p>
              </>
          )
      }
  
      const ShowFireBaseData = (props) => {
          const arr = props.data;
          
          return (
              <>
              <ul style={{listStyle:"none"}}>
                  {
                  arr.map((value, index) => {
                    return(
                          <>
                          <SetFirebaseData key={index} username={value.username} account={value.account} />
                          </>
                    )  
                  }
                      )
                  } 
                  </ul>
              </>     
          )
      }
  
      let data;
  
      switch (type) {
          case "accountdetails":
              data = {
                  title: "ACCOUNT",
                  action: "accountdetails"
              };
              break;
  
          case "statement":
              data = {
                  title: "STATEMENT",
                  action: "/statement"
              }
              break;
          case "history":
              data = {
                  title: "HISTORY",
                   action: "/history"
              }
              break;
  
          case "currentbalance":
              data = {
                  title: "CURRENTBALANCE",
                  action: "/currentbalance"
              };
              break;
          default:
              data = {
                  title: "no data found!"
              }
              break;
      }

//arrow go back
function IconArrowBackOutline(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M244 400L100 256l144-144M120 256h292"
      />
    </svg>
  );
}

const BackButton =() => (
    <Stack fill center spacing={4} style={{width: "100px"}}>
        
    </Stack>
);

    const navigate = useNavigate();

    const goBack =() => {
        return navigate("/");
    }

    return (
        <div className="account-details-container">
          <div className="top-navbar">
          <Navbar />
          </div>
        <div 
        className='service-back-button'
        style={{margin: "20px"}}>
            <button style={{border: "none"}} onClick={goBack}>
        <IconArrowBackOutline width="50px" height="50px" />
        </button> 
        </div>

            <div style={{height: "250px", backgroundColor: "white"}} className="account-lyout-ft">
                <h3 style={{margin: "20px"}}>Account Details</h3>
            <li className="account-course-li" key={"projects.userId"} >
                <h3 className="title" style={{margin: "10px 5px 0px 10px", color: "GrayText", fontSize: "14px"}}>{data.title}</h3>  
                   
                <div className="account-course-input">
                    <div className="firebase-data">
                        <ShowFireBaseData data={projects} />     
                    </div>
                    <div style={{backgroundColor: "#a3cdf8", color: "black"}}>
                        <Link className="account-front-btn" to={data.action}><b>OPEN</b></Link>
                        <a className="account-front-btn"><b>DELETE</b></a> 
                    </div>
                </div> 
            </li>
        </div>
        </div>
    );
};

export default AccountDetails;