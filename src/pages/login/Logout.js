import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { auth } from "../../firebase";

function LogoutBtn(props) {
  //alert("your logout");
 return  <button type="submit" className="logout-button" onClick={props.logout}>Logout</button>;
 
}
function Logout() {
    const [currentUser, setCurrentUser] = useState(null);

    const navigate = useNavigate();
   

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      })
    },[])

    const handleLogout= (e) => {
        e.preventDefault();

        const auth = getAuth();
    signOut(auth).then(() => {
        // Signed out successful.
        console.log("You've been successfuly loged out");

            console.log("Nothing went wrong!");
       
        navigate("/login")
      })
      .catch((error) => {
        //setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`error occur ${errorMessage}`);
      });
  };

  return (
    <div className="logout">
      <form className='logout-form' onSubmit={handleLogout}>
        <LogoutBtn logout={handleLogout} />
    </form>
    </div>
  )
}

export default Logout;
