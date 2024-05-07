import React, { Component, useState } from 'react';
//import "./Navbar.css"
import { getAuth, signOut } from 'firebase/auth';
import {  Link, Outlet, useNavigate } from "react-router-dom";
//import { FiMenu, FiX } from 'react-icons/fi';

import "./HelpNavbarStyles.css";
import Logout from '../login/Logout';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';
import HowToRegister from './howtoregister/HowToRegister';

function Helpbar() {
  const state =[];
  const navigate = useNavigate();
  
      const goBack =() => {
          return navigate("/");
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

  return(
    
    <>
    <Navbar />
    <div style={{margin: "20px"}}>
            <button style={{border: "none"}} onClick={goBack}>
        <IconArrowBackOutline width="50px" height="50px" />
        </button> 
        </div>
    <nav className='main-help-bar'>
    <Link to="/"> 
    <p style={{ textAlign: 'center' }}><span>TEN<span style={{ color: '#17cf97' }}> GLOBAL</span> HELP</span></p>
    <hr style={{ height: '4px' }}></hr>
    </Link>
  <div className='nav-help-list'>
    <h2 style={{textAlign: "center"}}>To get help Choose from options bellow </h2>
    <ul id="helpNavbar" 
    className="#navbar">
      
      <li >
        <Link to='/howtoregister' className='active'>
          How to register
        </Link>
        </li>
      <li>
      <Link to="/howtosend">How to send money</Link></li>

      <li>
      <Link to="/contactus">Need more help?, press here to contact us</Link></li>
          <p style={{color: "red"}}>Caution: Only send money to people you know to avoid being scammed</p>    
    </ul>

  </div>
  </nav>
    
      <Outlet />    
    </>
  )
    }

export default Helpbar;