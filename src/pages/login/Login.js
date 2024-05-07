import React, {useContext, useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import SideBarLayout from '../sidebarlayout/SidebarLayout';
import { AuthContext } from '../../context/AuthContext';
  
function Login() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logText, setLogText] = useState(0);


    const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

    const handleLogin= (e) => {
        e.preventDefault();

        const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //alert(email);
        console.log(user);
        dispatch({type:"LOGIN", payload:user})
        
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

//show and hide side nav
const Search = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div>
      <input className='login-button' type="submit" value="Login" onClick={onClick} />
      { showResults ? <Results /> : null }
    </div>
  )
}

const Results = () => (
  <div>
<SideBarLayout />
  </div>
)

return (
    <div>
      
    <div className='login-container'>
      <div className='login'> 
        <form className='login-form' onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
<input type='submit' value='Login'  className='login-button'/>
{error && <span style={{color: "red"}}>Wrong email or password!</span>}
<ul>
<li>Cilck <Link to="/registeruser" >here</Link> to register</li>
</ul>

      </form>
      </div>
    <div className="login-info">
    <h5 style={{ fontWeight: "600" }}>TEN GLOBAL MONEY</h5>
        <p style={{ marginTop: '50px' }}>Safe Cash Send</p>
        <p>Quick Process</p>
    </div>
    </div>
    </div>
  );
}

export default Login;