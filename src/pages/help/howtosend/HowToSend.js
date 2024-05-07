import React from "react";
import Navbar from "../../navbar/Navbar";
import { useNavigate } from "react-router-dom";

import "../../aboutus/AboutUs.css";

function HowToSend() {

  const navigate = useNavigate();

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
        <div className="aboutus-container">
          <h3> How To Send Money</h3>
<ol>
<li>Login usind <i>username</i> and <i>password</i></li>
<p>- If using mobile device press send proof button then fill the form with following details
    <br></br>
    - If using desktop just fill the form with following details
</p>
<ul>
<li><i>Choose Country to send to</i></li>
<li><i>Choose amount</i></li>
<li><i>Upload proof of payment</i></li>
<li><i>Press <b>Send</b> button</i></li>
</ul>
<li>It only takes few minutes
for money to
reach the destination.</li>
<li> after sending money it
takes few minutes
before money sent so that
a clinet can make
changes if there is
a mistake</li>
<li> when the process complete
the client receive an
sms contains details for
cash withdrawals.</li>
</ol>

<hr></hr>
<p>ANDROID APP is comming soon!</p>
</div>
      </div>
  )
}

export default HowToSend;