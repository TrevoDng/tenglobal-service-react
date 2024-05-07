//import {, useState} from 'react';
import React ,{ useContext, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import SideBarLayout from "../sidebarlayout/SidebarLayout";
//import History from "../service/history/History";

import "./LandingPage.css";
import Services from "../service/Service";
import ReasonForSystem from "../reasonforusingsystem/ReasonForSystem";
import HowToRegister from "../help/howtoregister/HowToRegister";
import ListOfCountries from "../listofcountries/ListOfCountries";
import Safety from "../sfatety/Safety";
import HomeContent from "../HomeContent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../pagenotfound/PageNotFound";
import UserProfile from "../../userprofile/UserProfile";
import Login from "./Login";
import Statement from "../service/statement/Statement";
import ContactUs from "../contactus/ContactUs";
import AboutUs from "../aboutus/AboutUs";
import RegisterUser from "./Register";
import { AuthContext, AuthProvider } from "../../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthValue } from "../../context/AuthContext";
import Widget from "../../components/widget/Widget";
import History from "../service/history/History";
import CurrentBalance from "../service/CurrentBalance";
import { Link } from "react-router-dom";
import ServiceList from "../service/servicelist/ServiceList";
//import SendProofOfPayment from "../service/proofofpayment/SendProofOfPayment";
import { proofRef } from "../service/proofofpayment/proofRef";
import { onValue } from "firebase/database";
import { userRef } from "./RegisterRef";
import SendProofCollectData from "../service/proofofpayment/SendProofCollectData";
import HomeWidget from "../HomeWidget";
import { colors } from "@mui/material";
import Footer from "../../components/footer/Footer";
import AccountDetails from "../service/accountDetails/AccountDetails";
import useHolder from "../customhook/useHolder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainPage() {
      /**
       * <div className='home-page-container'>
<div className='sidebar-div'><SideBarLayout /></div>
<div className='main-container-div'>
<main className='sidebar-main'>
    </main> 
    </div>
    </div>
       */
  
  return(
    <div className="MainPage">
    </div>
  )
}
/*
function StatementList(props) {
    
  const arr = props.data;
  const statementList = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{statementList}</ul>
}
*/

  function LandingPage() {
    const [holder, setHolder] = useState(0);
    const homeContent = 0;
    const proofOfment = 1;
    const statement = 2;
    const history  = 3;
    const currentBalance  = 4;
    const accountDetails = 5;
    const [data, setData] = useState([]);
    const [myUserId, setMyUserId] = useState("");
    const [projects, setProjects] = useState([]);

    let textOut = {};
    const [ textout ] = useHolder(holder, textOut);
        
        useEffect(() => {

          try {
            setMyUserId(auth.currentUser.uid);
            //alert(myUserId);
          }
          catch {
            console.log("User Id not found");
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
      })
        }, []);
  
  
      const parentToChild = () => {

  //const userId = auth.currentUser.uid;
//setting side bar data bellow
        setData(
          <div
          id="sidebar-layout"
          style={({color: "white"}, { display: "flex", flexDirection: "row", position:"relative" })}
          className="sidebar-parent-div">
    
      <nav className='side-navbar'>
      <h1>Side bar layout</h1>
        <div className='sidenavbar-list'>
          <ul style={({listStyle: 'none'}, {color: 'white'})}>
          <li onClick={() => setHolder(homeContent)}><i className="fa-solid fa-house" style={{color: "#00d5ff", fontSize: "bold" }}></i>
              <a className="active"
              >Home</a></li>
              <li onClick={() => setHolder(accountDetails)}><i className="fa-solid fa-money-check" style={{color: "#00d5ff", fontSize: "bold" }}></i>
              <a className="active"
              >Account</a></li>
              <li onClick={() => setHolder(proofOfment)}><i className="fa-regular fa-paper-plane" style={{color: "#00d5ff", fontSize: "bold" }}></i>
              <a className="active"
              >Send Proof</a></li>
            <li onClick={() => setHolder(statement)}><i className="fa-solid fa-file" style={{color: "#00d5ff", fontSize: "bold" }}></i>
              <a className="active"
              >Statement</a></li>
            <li onClick={() => setHolder(history)}><i className="fa-solid fa-clock-rotate-left" style={{color: "#00d5ff", fontSize: "bold" }}></i>
              <a
            >History</a></li>
            <li onClick={() => setHolder(currentBalance)}><i className="fa-solid fa-money-check" style={{color: "#00d5ff", fontSize: "bold" }}></i>
            <a
            >Ballance</a>
            </li> 
          </ul>
        </div>
        </nav>
    
          <footer className='sidebar-footer'>
          <li className='sidebar-footer-profile'>
              <Link to="userProfile"
              style={{color: "#fff"}}>
                {
                projects.map((project) => {

                  return (
                    <>
                    <span key={projects.userId}>
                    <img style={{width:"40px", height: "40px", border: "none", borderRadius: "40px"}} src={
                      project.profile_picture
                        ? project.profile_picture
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                                     alt="img not foud"  
                                     className="read-course-img"></img> 
                    <span style={{fontSize: "12px"}}>{ project.username } </span>
                    </span>
                    </>
                  )
                  
                })
                }
                </Link>

              </li>
          </footer>
      </div>
        )
      }

      setTimeout(parentToChild, 1000);
      

  return (
    <div className="home">
      <div className="landing-container">
        <div className="item1">
  <Navbar />
  </div>
  <div className='item2'>
    <SideBarLayout parentToChild={data} />
    </div>
      <div className='item3'>
        <main className='sidebar-main'>
          <div className="home-design" style={{textAlign: "center"}}>
            <h1 style={{textAlign: "center", color: "white"}}>Fast way to send Cash</h1>
            <li>
            <i class="fa-solid fa-globe" id="earth-icon" style={{color: "white"}}></i>
            <i class="fa-solid fa-hand-holding-dollar" id="dollar-hand"></i>
            </li>
          </div>

        <div className="show-element">{textout}</div>
        <ToastContainer />
      </main> 
    </div>
    <div className="item4">Right page</div>
    <div className="item5"><Footer /></div>
    </div>
    
  </div>
  );
  }
 
  export default LandingPage;


  /*
  <div className="show-element">{textOut}</div>
               <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>

                     //set user id/ but i have to get id from firebase
        /*
      const setUserIdName =(e) => {
        setMyUserId(userId);
        var myId = (id) => id = e.target.value;
  
        console.log(myId);
    }
    /*
      <ServiceList type="userProfile" />
        <ServiceList type="statement" />
        <ServiceList type="history" />
        <ServiceList type="currentbalance" />

         <div className="widget">
        
        
        </div>
      /*
      const sendData = (holder) => {
        setData(holder)
      };

      //another Widget
      <div className="widget">
        <Widget type="userProfile" />
        <Widget type="statement" />
        <Widget type="history" />
        <Widget type="currentbalance" />
        </div>

  */
 /*
<li onClick={() => setHolder(contactUs)}><i className="fa-solid fa-phone" style={{color: "#00d5ff", fontSize: "bold" }}></i>
              <a
            >ContactUs</a></li>
            <li><i className="fa-solid fa-right-to-bracket" style={{color: "#00d5ff", fontSize: "bold" }}></i>
              <a href='/login'>Login</a></li>
 */
