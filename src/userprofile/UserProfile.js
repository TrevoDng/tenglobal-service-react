import * as React from "react";
import Navbar from '../pages/navbar/Navbar';
import './UserProfile.css';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';


function UserProfile() {

    const [photoURL, setPhotoURL] = useState('');
    const [projects, setProjects] = useState([]);
    
    useEffect((e) => {
      
            setPhotoURL(photoURL);

            try {
              fetch("http://localhost:8080/api/v1/auth/user/?id=6")
            .then(res=>res.json())
            .then((result)=>{
              setProjects(result);
            });
            }
            catch {
              
              console.log("User Id not found");

            }
    }, []);
    
    const SetFirebaseData =({username, email, contactNumber, account, profile_picture, register_date}) => {
      return (
          <div className="user-profile-card">
            <div>
            <img style={{width:"40px", height: "40px", marginRight: "20px", border: "none", borderRadius: "40px"}} src={
                      profile_picture
                        ? profile_picture
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                                     alt="img not foud"  
                                     className="read-course-img"></img>
            </div>
          <p style={{color: "black"}}>Name: { username }</p>
          <p style={{color: "black", fontSize: "16px"}} className="read-course-p">Email: { email }</p>
          <p style={{color: "black", fontSize: "16px"}} className="read-course-p">Contact: { contactNumber }</p>
          <p style={{color: "black"}}>Account: { account }</p>
          <p style={{margin: "0px 0px 0px 0px", color: "black"}}>Registered date: { register_date }</p>
          </div>
      )
  };

  const ShowFireBaseData = (props) => {
      const arr = props.data;
      
      return (
          <>
               {
                arr.map((value, index) => (
                  <SetFirebaseData key={index} username={value.username} email={value.email} contactNumber={value.contactNumber} account={value.account} profile_picture={value.profile_picture} register_date={/\d{4}-\d{2}-\d{2}/.exec(value.register_date)[0]}/>
                  ))
              }
          </>     
      )
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

    const navigate = useNavigate();

    const goBack =() => {
        return navigate("/");
    }

    return(
        <div className="user-profile-container">
          <Navbar />
          <div style={{margin: "20px"}}>
            <button style={{border: "none"}} onClick={goBack}>
        <IconArrowBackOutline width="50px" height="50px" />
        </button> 
        </div>

        <p style={{ textAlign: 'center' }}><span style={{color: "#3B71CA"}}>USER</span> <span>PROFILE<span style={{ color: "#3B71CA" }}> DETAILS</span></span></p>
        <hr style={{ height: '4px', color: "#3B71CA", width: "100%" }}></hr>
              <section className="user-layout-sectn">
                  <div className="user-lyout-container">
                  <ShowFireBaseData data={projects}/>
                  </div>  
              </section>
          </div>
        
    )
}

export default UserProfile;