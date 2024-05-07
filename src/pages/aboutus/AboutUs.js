import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

import "./AboutUs.css"
function AboutUs() {

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
        <p style={{ textAlign: 'center' }}><span style={{color: "#3B71CA"}}>ABOUT</span> <span>TEN<span style={{ color: "#3B71CA" }}> GLOBAL</span></span></p>
        <hr style={{ height: '4px', color: "#3B71CA", width: "100%" }}></hr>
<ul>
<li>Press register button to register in few minutes</li>
<li>Email and Cell number is required</li>
<li>after registration you receive sms to verify the account</li>
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
</ul>

<hr></hr>

<p>
<span> clients can edit their
profiles including(contact number
and emails).</span>
<span> a client will be required
to provide an image.
</span>
</p>
<hr></hr>
<p>ANDROID APP is comming soon!</p>
</div>
      </div>
  )
}

export default AboutUs;