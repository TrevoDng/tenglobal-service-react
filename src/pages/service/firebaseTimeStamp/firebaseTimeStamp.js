import { Timestamp } from "firebase/firestore";
import { useEffect } from "react";

 export const convertTimeStamp = (stamp) => {

        let date = new Date(stamp);
        let mm = date.getMonth();
        let dd = date.getDate();
        let yyyy = date.getFullYear();
    
        date = mm + '/' + dd + '/' + yyyy;
        return date;
    
    };   
 
