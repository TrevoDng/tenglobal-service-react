import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, serverTimestamp, set } from "firebase/database";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRef } from "./RegisterRef";
import { auth, storage } from "../../firebase";
import { makeAccountNumber, makeUserId } from "../service/proofofpayment/randomstring/RandomReference";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
//import { useAuthValue } from '../../context/AuthContext';

function RegisterUser() {
    const [error, setError] = useState(false);
    const [file, setFile] = useState("");
    const [userName, setUserName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    const [contact, setContact] = useState(0);
    const [account, setAccount] = useState()

    const navigate = useNavigate();

    const getAccount = makeAccountNumber(10);
    const handleUserName = (e) => {
        setUserName(e.target.value);
        
        setAccount(getAccount);
      
    }

    const handleContact = (e) => {
        setContact(e.target.value);
    }

    //send profile pic and get url
    //send proof of payment
    useEffect(() => {
      const uploadFile = () => {
          const name = new Date().getTime() + file.name;
          console.log(name);

          const storageRef = ref(storage, `profile_pic/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
              "state_changed",
              (snapshot) => {
                  const progress = 
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log(progress);
                  setPerc('Upload is' + progress + '% done');
                  switch(snapshot.state) {
                      case "paused":
                          console.log("Upload is paused");
                          break;

                      case "running":
                          console.log("Uploading is running");
                          break;
                          default:
                              break;
                  }
              },
              (error) => {
                  console.log(error);
              },
              () => {
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                      setData((prev) => ({...prev, imageUrl: setImageUrl(downloadURL)}));
                  });
              }
          );
      };
      file && uploadFile();


  }, [file]);
  console.log(data);
//end of add file

     function writeData(e) {
        const auth = getAuth();

      createUserWithEmailAndPassword(
          auth, 
          email, 
          password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);

              const myUsersId = auth.currentUser.uid; 
            
            setTimeout(async function() {

              const fireBaseId = await Promise.resolve(myUsersId)
              .then(res => res);
              
              set(userRef(fireBaseId), {
                username: userName,
                surname: surname,
                contact: contact,
                email: email,
                number: contact,
                account: account,
                profile_picture : imageUrl,
                register_date: new Date().toLocaleDateString(),
                register_time: new Date().toLocaleTimeString(),
                register_createdAt: serverTimestamp(),
      
              });
  
        navigate("/login");
        
            }
            ,3000, userId);  
              
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage =  error.message;
            // ...
        });
      
      e.preventDefault();
    }
    
    return(
        <div>
            <div> 
            <h1 className="register-heading"><span>Register</span></h1>
    <div className='login-container'>

      <div className='login'> 
      <p>{account}</p>
        <form className='login-form' onSubmit={writeData}>
        <div>
          <img
            style={{width: "50px", height: "50px", border: "none", borderRadius: "50px"}}
              src={
              file
              ? URL.createObjectURL(file)
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
              alt=""
              className="add-file-img"></img>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          onChange={handleUserName}
          className="login-input"
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
          className="login-input"
        />
        <input
          type="number"
          placeholder="Contact Number"
          onChange={handleContact}
          className="login-input"
        />
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
    <input type='submit' value='Register' className='login-button' />

        <label htmlFor="file"></label>
        <input className="send-file" 
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "display" }} />

<p>Already have an account</p>
<ul>
<li>Cilck <Link to="/login" >here</Link> to Login</li>
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
        </div>
    )
}

export default RegisterUser;
