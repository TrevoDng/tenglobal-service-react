import * as React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SideBarLayout from "../sidebarlayout/SidebarLayout";
import { Stack } from "@mui/material";
//import { ContactUsEmailsjs } from "../../emailjs/Emailjs";

import "./ContactUs.css"
import EmailTemplate from "./nodemailer/EmailTemplate";

function ContactUs() {

    const contactDetails = {
        email: "info@tenit.co.za",
        number: "+27 66 575 0985"
    };

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

    return(
        <div>
          <Navbar />
            <div style={{margin: "20px"}}>
            <button style={{border: "none"}} onClick={goBack}>
        <IconArrowBackOutline width="50px" height="50px" />
        </button> 
        </div>

            <h1 className="statement-heading"> <span>Contact Us</span></h1>
            <div className="contact-data">
                <p className="ourcontact-email">Email: {contactDetails.email}</p>
                <p>Call: {contactDetails.number}</p>
            </div>

            <div>
                <EmailTemplate />
            </div>
        </div>
    )
}

export default ContactUs;