

import React, { useEffect, useState } from 'react';


import './HomeContent.css';
import HomeWidget from './HomeWidget';
import SideBarLayout from './sidebarlayout/SidebarLayout';
import Navbar from './navbar/Navbar';

function HomeContent () {

    return (
      <>
        <h2 style={{textAlign:"center", margin: "20px"}}>Ten Global</h2>
         
          
        <section className="home-layout-sectn">
        <div className="home-lyout-container">
            <HomeWidget type={"sendproofofpayment"} />
            <HomeWidget type={"accountdetails"} />
            <HomeWidget type={"statement"}/>
            <HomeWidget type={"history"}/>
            <HomeWidget type={"currentbalance"}/>                            
              </div>  
          </section>
       </>
    );
  
}

export default HomeContent;