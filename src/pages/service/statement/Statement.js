import * as React from "react";
import { list } from "firebase/storage";
import { useEffect, useState } from "react";

import "./statement.css";
import { auth } from "../../../firebase";
import { getProofRef, proofRef } from "../proofofpayment/proofRef";
import { onValue } from "firebase/database";
//import * as firebase from 'firebase';
import { FirebaseOptions } from "firebase/app";
import { showDate } from "../proofofpayment/dateandtime/dateAndTime";
import { convertTimeStamp, dateFunction } from "../firebaseTimeStamp/firebaseTimeStamp";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { MyDocument } from "./DownloadStatement";
import HomeContent from "../../HomeContent";
import Navbar from "../../navbar/Navbar";
//import { MyDocument } from "./DownloadStatement";
//import statementPdf from "./StatementPdf";


const Statement = () => {
    const [lists, setLists] = useState([]);
    const [myUserId, setMyUserId] = useState("");
    const [projects, setProjects] = useState([]);
    const [dataId, setDataId] = useState("");
    const [holder, setHolder] = useState([]);

useEffect(() => {
    
     //set user id/ but i have to get id from firebase
     try {
        
        fetch("http://localhost:8080/api/v1/tenglobal/2/proofs/")
            .then(res=>res.json())
            .then((result)=>{
              setProjects(result)
            });

     } 
     catch {
        console.log("failed to get user id");
     }   

     
  /*  
    const query = proofRef(myUserId, dataId);
    return onValue(query, (snapshot) => {
        const myData = snapshot.val();

        if(snapshot.exists()) {
            Object.values(myData).map((project) => {
                setProjects((projects) => [...projects, project])
                console.log(project);
                try {
                    setDataId(project.dataId);
                    alert(project.dataId);
                } 
                catch {
                    console.log("failed to set data id");
                }
                
            });
        }
    })
*/
}, []);

const downloadStatement =()=> {
    try {
    
        fetch("http://localhost:8080/api/v1/tenglobal/2/proof-to-pdf/")
            .then((res)=> {
                res.blob().then((blob)=> {
                    const fileUrl = window.URL.createObjectURL(blob);

                    let alink = document.createElement("a");
                    alink.href = fileUrl;
                    alink.download = "SamplePDF.pdf";
                    alink.click();
                })
            })

     } 
     catch {
        console.log("failed to download statement");
     } 
 }
    
    function StatementList(props) {
        const arr = props.data;
        const statementList = arr.map((value, index) => <li key={index}>{value} {data.item}</li>);
        return <ul>{ statementList }</ul>
    }

    const arr = [1, 2, 3, 4, 5];


    const TableData = ({ countryName, createdOn, amount, pendingAction }) => {
        return(
            <>
            <tr style={{width: "100%", borderBottom: "1px solid gray"}}>
        <td>{countryName}</td>
        <td>{createdOn}</td>
        <td>{amount}</td>
        <td>{pendingAction}</td>
        </tr>
        </>
        )
    };

    const ShowTable = (props) => {
        const arr = props.data;
        //const tableData = arr.map((value, index) => <td key={index}>{value}</td>)

        return(
            <>
            <table className="data-table" style={{width: "100%"}}>
                <thead style={{textAlign: "center"}}>
                    <tr style={{borderBottom: "1px solid black"}}>
                        <th colSpan={1} >Country</th>
                        <th colSpan={1} >Date</th>
                        <th colSpan={1} >Amount</th>
                        <th colSpan={1} >Action</th>
                    </tr>
                </thead>
                    <tbody style={{textAlign: "center"}}>
                        {
                            arr.map((value, index) => (
                                <TableData key={index} createdOn={/\d{2}-\d{2}-\d{2}/.exec(value.createdOn)} countryName={value.countryName} amount={value.amount} pendingAction={value.pendingAction}/>
                            ))
                        }
                    </tbody>
            </table>
        </>
        )
    }
    //const data = (projects);
    const data = [
        {countryName: "Ghana", date: "12/12/2023", time: "12:00", amount: "200", action: "action"},
        {countryName: "Ghana", date: "12/12/2023", time: "12:00", amount: "200", action: "action"}
    ];

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
          setHolder(<HomeContent />);
      }
    return (
        <div>
            <div className='navbar-container'>
                <Navbar />
        </div>
        <div 
        className='service-back-button'
        style={{margin: "20px"}}>
            <button style={{border: "none"}} onClick={goBack}>
        <IconArrowBackOutline width="50px" height="50px" />
        </button> 
        </div>
        <h1 className="statement-heading"> <span>Statement</span></h1>

        <div className='statement-container'>
      <div className='statement'>
        
        <div className="statement-data" style={{width: "100%", margin: "20px"}}>
            <div>
                <ShowTable data={projects} />
            </div>    
        </div>    
    </div>
        </div>
        <button onClick={downloadStatement}>Download statement</button>
        </div>
    )
}

export default Statement;


    /*
    const userId = auth.currentUser.uid;    
        const query = getProofRef(myUserId);
        return  onValue(query, (snapshot) => {
            const myData = snapshot.val();

            if(snapshot.exists()) {
                Object.values(myData).map((project) => {
                    setProjects((projects) => [...projects, project])
                    console.log(project);
                });
            }
        });
*/
//const userId = auth.currentUser.uid;

    //const date =(stamp) => new Date(stamp.UTC(stamp))
/*
    const dateFunction =(stamp) => {

        var num = "";
        for(var i =0; i < 13; i++) {
            
            if (i % 3 == 0) {
            num += stamp[i]
            }
            else {
                num += "-"+stamp[i]
            }
            
        }
        return num;
    }
  */
/*
<ul style={{listStyle: "none"}} >
                {projects.map((project) => {
                    return (
                        <li key={projects.userId}>
                            <p key={project.userId}>
                   <a> User Name: {project.username}</a>
                    <button> Download </button>
                    </p>
                    </li>
                    )
                })}
            </ul>
*/
/*
<div className="statement-data">
            <StatementList data={arr} />
            </div> 
*/
/*
 <div className="read-lyout-container">
                  <ul style={{listStyle:"none"}}>
    
                          {projects.map((project) => {
                            
                            return (
                               
                <div className="read-lyout-ft">
                              <li className="read-course-li" key={projects.userId} >
                               
                              <img src={project.fileUrl}
                               onError={({ currentTarget }) => {
                                currentTarget.onerror = null; //previous looping
                                //currentTarget.src=require('./assets/coursesIcon.png');
                               }}
                               alt="img not foud"  
                               className="read-course-img"></img>  
                            <h6 className="read-course-p" key={project.userId}>
                              {project.username}
                                </h6>
                               <div className="read-course-input">
                              <p className="read-course-p" key={project.userId}>
                              Lecture Name: {project.username}
                                </p>
                               
                            <a className="read-front-btn"><b>EDIT</b></a>
                            <a className="read-front-btn"><b>DELETE</b></a> 
                             </div> 
                               </li>
                               </div>
                
                            )
                          })
                        }
                  </ul>
                  </div> 
*/