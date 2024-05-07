import * as React from "react";
import { useEffect, useState } from "react";
import FirebaseData from "../../../globaldata/Firebasedata";
import { auth } from "../../../firebase";
import { proofRef } from "../proofofpayment/proofRef";
import { onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import "./History.css"

const History = () => {
    const [projects, setProjects] = useState([]);
    
useEffect(() => {

    //set user id/ but i have to get id from firebase
    try {
        fetch("http://localhost:8080/api/v1/tenglobal/5/proofs/")
            .then(res=>res.json())
            .then((result)=>{
              setProjects(result)
            });
    }   
    
    catch {
        console.log("user id not found");
    }
    
}, []);

    const TableData = ({countryName, createdOn, amount, pendingAction}) => {
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

    const splitedDate =(props) => {
        const reg = "T";
    const reg1 = ":";
    const reg2 = ".";
    const reg3 = "-";
    const oneStr = reg + reg1 + reg2 + reg3;
    const str = props;
    const newStr = str.replaceAll(reg, "-");
    const newStr1 = newStr.replaceAll(reg1, "-");
    const newStr2 = newStr1.replaceAll(reg2, "-");
    const newStr3 = newStr2.replaceAll(reg3, "-");

    return newStr3;

    }

    const ShowTable = (props) => {
        const arr = props.data;
        

        return(
            <>
            <table className="data-table" style={{width: "100%"}}>
                <thead style={{textAlign: "center"}}>
                    <tr style={{borderBottom: "1px solid black"}}>
                        <th colSpan={1} >Country</th>
                        <th colSpan={1} >Date</th>
                        <th colSpan={1} >Amount</th>
                        <th colSpan={1} >Status</th>
                    </tr>
                </thead>
                    <tbody style={{textAlign: "center"}}>
                        {
                            arr.map((value, index) => (
                                <TableData key={index} countryName={value.countryName} createdOn={splitedDate(value.createdOn).substr(11, 5).replace("-", ":")}  amount={value.amount} pendingAction={value.pendingAction}/>
                            ))
                        }
                    </tbody>
            </table>
        </>
        )
    }

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
    
    return (
        <div>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <div 
            className="service-back-button"
            style={{margin: "20px"}}>
            <button style={{border: "none"}} onClick={goBack}>
        <IconArrowBackOutline width="50px" height="50px" />
        </button> 
        </div>
        <h1 className="statement-heading"> <span>History List</span></h1>

        <div className='statement-container'>
      <div className='statement'>
        
        <div className="statement-data" style={{width: "100%", margin: "20px"}}>
        <ShowTable data={projects} />
            
            </div>    
        </div>
        </div>
        </div>
    )
}

export default History;