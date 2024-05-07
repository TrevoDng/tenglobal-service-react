import * as React from "react";
import { useEffect, useState } from "react";
import FirebaseData from "../../globaldata/Firebasedata";
import { auth } from "../../firebase";
import { proofRef } from "./proofofpayment/proofRef";
import { onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";

function CurrentBalance(){
    const [lists, setLists] = useState([]);
    const [myUserId, setMyUserId] = useState("");
    const [projects, setProjects] = useState([]);
    const [totalSum, setTotalSum] = useState([]);
    
    //const userId = auth.currentUser.uid;

useEffect(() => {

    fetch("http://localhost:8080/api/v1/tenglobal/3/proofs/")
            .then(res=>res.json())
            .then((result)=>{
              setProjects(result)
            });
}, []);

    const TableData = ({total, createdOn, amount, pendingAction}) => {
        return(
            <>
            <tr style={{width: "100%", borderBottom: "1px solid gray"}}>
        <td>{createdOn}</td>
        <td>R{amount}.00</td>
        <td>{pendingAction}</td>
        </tr>

        
        </>
        
        )
    };

    const ShowTable = (props) => {

      
        const arr = props.data;
        
        const total = arr.reduce((acc, row) => acc + row.amount, 0);

        setTotalSum(total);

        return(
            <>
            <table className="data-table" style={{width: "100%"}}>
                <thead style={{textAlign: "center"}}>
                    <tr style={{borderBottom: "1px solid black"}}>
                        <th colSpan={1}>Date</th>
                        <th colSpan={1} >Amount</th>
                        <th colSpan={1} >Status</th>
                        
                    </tr>
                </thead>
                    <tbody style={{textAlign: "center"}}>
                        {
                            arr.map((value, index) => (
                                
                                <TableData key={index} createdOn={/\d{2}-\d{2}-\d{2}/.exec(value.createdOn)} total={totalSum} amount={value.amount} pendingAction={value.pendingAction}/>
                            
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
            className='service-back-button'
            style={{margin: "20px"}}>
            <button style={{border: "none"}} onClick={goBack}>
        <IconArrowBackOutline width="50px" height="50px" />
        </button> 
        </div>
        <h1 className="statement-heading"> <span>Current Ballance</span></h1>

        <div className='statement-container'>
      <div className='statement'>
        
        <div className="statement-data" style={{width: "100%", margin: "20px"}}>
        <ShowTable data={projects} />
        <table className="data-table" style={{width: "100%"}}>
            <thead style={{textAlign: "center", color: "#fff"}}>
                    <tr style={{width: "100%", borderBottom: "1px solid gray"}}>
                        <th colSpan={1}>head</th>
                        <th colSpan={1}>head</th>
                        <th colSpan={1}>head</th>
                    </tr>
            </thead>
            <tbody>
                <tr style={{textAlign: "center", width: "100%", color: "#fff", borderBottom: "1px solid gray"}}>
                    <td colSpan={1}>eededdg</td>
                    <td colSpan={1} style={{ textAlign: "right" ,color: "#545351"}}>Total</td>
                    <td colSpan={1} style={{ textAlign: "right" ,color: "#545351"}}>R{totalSum}.00</td>
                </tr>
            </tbody>
        </table>
            </div>    
        </div>
        </div>
        </div>
    )
}

export default CurrentBalance;
