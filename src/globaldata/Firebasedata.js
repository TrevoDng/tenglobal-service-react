
import { useEffect, useState } from "react";
import { getProofRef, proofRef } from "../pages/service/proofofpayment/proofRef";
import { onValue } from "firebase/database";

export let projectsData =[];

const FirebaseData = () => {
    const [projects, setProjects] = useState([]);
    const [myUserId, setMyUserId] = useState("");
    const [file, setFile] = useState("")
    const [counter, setCounter] = useState(0);

    const addNumber =() => {
        setCounter(counter + 1)
    }
    
    useEffect(() => {
    //const userId = auth.currentUser.uid;
    const query = proofRef("_proof_id");

    return onValue(query, (snapshot) => {
        const myData = snapshot.val();

        if(snapshot.exists()) {
            Object.values(myData).map((project) => {
           setProjects((projects) => [...projects, project]);
           
           console.log(project);
        });
    }
   });
}, []);


let x = 1;
var index = x;
function getIndex() {
    let listId = document.getElementsByClassName("listId");
 return listId[index];
}


const FirebaseArray =(props) => {
    const firebaseArray = projects.map((project) => <li key={projects.userId}>{project.username}</li>);
    return <ol>{ firebaseArray }</ol>
}

const currentTime = new Date();
const options = { timeZone: 'America/Los_Angeles' }; // specify the time zone as an option
const formattedTime = currentTime.toLocaleTimeString('en-US', options);

console.log(formattedTime); // e.g. "1:45:22 PM"
var offset = new Date().getTimezoneOffset();

    return (
        <div>
            <FirebaseArray />
        </div>
    )
}
     
export default FirebaseData;