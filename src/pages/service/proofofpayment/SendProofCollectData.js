import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown'; 
import 'react-dropdown/style.css';
import { africaData } from '../../../components/tendata/tendata';
import Navbar from '../../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase';
import { useId } from "react";
import { makeReference, makeUserId } from './randomstring/RandomReference';

import "./sendProof.css";

 function SendProofCollectData() {

                const [name, setName] = useState("");
                const [countryName, setCountryName] = useState("");
                const [createdOn, setCreatedOn] = useState([]);
                const [pendingAction, setPendingAction] = useState("...Pending");
                const [amount, setAmount] = useState(0);
                const [data, setData] = useState({});
                const [fileUrl, setFileUrl] = useState("");
                const [per, setPerc] = useState(null);
                const [tenGlobal, setTenGlobal] = useState([]);
                const [file, setFile] = useState("");
                const [reference, setReference] = useState(0);
                
                //send pic to firebase
                useEffect(()=> {
                  const uploadFile = () => {
                    const name = new Date().getTime() + file.name;
                    console.log(name);
        
                    const storageRef = ref(storage, `proof_pic/${file.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);
        
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            const progress = 
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log(progress);
                            setPerc('Upload is: ' + progress + '% done');
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
                                setData((prev) => ({...prev, fileUrl: setFileUrl(downloadURL)}));
                                //setFileUrl(downloadURL);
                            });
                        }
                    );
                };
                file && uploadFile();
                
                }, [file])
                
                //end of send pic to firebase
                
                

                const handleClick = (e) => {
                        e.preventDefault();

                        setReference(makeRef);
                        const tenglobal={name, fileUrl, countryName, amount, pendingAction, reference};
                        console.log(tenglobal);

                        fetch("http://localhost:8080/api/v1/tenglobal/2/proofs/create", {
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body:JSON.stringify(tenglobal)

                        }).then(() =>{
                            console.log("New student added")
                        })
                }

               //set user id/ but i have to get id from firebase
    const usersId = makeUserId(8);
    const makeRef = makeReference(10);

    function handleAmount(e) {
        e.preventDefault();
        setAmount(e.target.value)
        setReference(makeRef);
    }

                const handleChange =(e) => {
                  e.preventDefault();
                }

                const handleChangeCourse =(e) => {
                  e.preventDefault();
                }

                const handleChangeEmail =(e) => {
                  e.preventDefault();
                }


                useEffect(() => {
                  fetch("http://localhost:8080/api/v1/tenglobal/5/proofs/")
                  .then(res=>res.json())
                  .then((result)=>{
                    setTenGlobal(result);
                  })
                }, [])

const SetDataStructure =({id, name, countryName}) => {
    return (
      <>
      <p style={{color: "gray", fontSize: "16px"}} key={id}>Name: { name }</p>
      <p style={{margin:"0px 10px 60px", color: "gray", fontSize: "16px"}} key={id}>Country Name: { countryName }</p>
      </>
    )
}


const ShowData = () => {
  //const arr = props.data;

  return (
    <>
    <ul style={{listStyle:"none"}}>
      {
        tenGlobal.map((value, index) => {
          return(
            <>
            <SetDataStructure key={ index.id } name={value.name} countryName={value.countryName} />
            </>
          )
        })
      }
    </ul>
    </>
  )
}
  
    const defaultOption = africaData[0];

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

  return (
<div className='add-course'>
  <div className='navbar-container'>
  
  </div>
 
<header className="add-course-header">
<h3 className="proof-heading"> <span>Fill proof Details</span></h3>
</header>
<div className='add-course-container'>

  <section className='send-proof-container'>

  <div className="add-course-left">
    <div className="add-course-l-heading"></div>
    <img
      src={
        file
          ? URL.createObjectURL(file)
          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
      }
      alt=""
      className="add-course-img"
    />
    <br></br>
  </div>
  <br></br>
    <form className="add-course-form" onSubmit={handleClick}>
    
      <div className="flex-container">
        <div className="flex-item">
      <label htmlFor="name">Name</label><br></br>
      <input className="add-course-input" type="text" id='name' onChange={(e) => setName(e.target.value)} />
      <br></br>
      
      <label htmlFor="myArrowClassName">Choose a country</label>
      <Dropdown options={africaData} 
               
              value={defaultOption}
              onChange={(e)=> setCountryName(e.value)}
              placeholder="Select an option" 
              arrowClassName="myArrowClassName"
              arrowClosed={<span className="arrow-closed" />}
              arrowOpen={<span className="arrow-open" />}/>
      <label htmlFor="amount">Amount</label><br></br>
      <input className="add-course-input" type="text" id='amount' onChange={handleAmount} 
      style={{  marginBottom: "10px"}}/>
      </div>
      <div>
      <label htmlFor="file">
        </label>
      <input 
          className="add-course-input"
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "display" }} />
          </div>
          <div className='button-container'> 
      <button className="add-course-button" 
      type="submit" 
      onClick={handleClick}
      value='save'><b>Send</b></button>
      </div>
     
      </div>
    </form>
    <p>{ per }</p>
  </section>
  
</div>

</div>
  );
}

export default SendProofCollectData;
