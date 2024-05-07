import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { config } from "dotenv";

config();

//const userEmail = process.env.apiID;

//const userEmail = useEnv('REACT_APP_USER_EMAIL');

//console.log(userEmail);



const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectID,
  storageBucket: storageBucket,
  messagingSenderId: messageSenderID,
  appId: apiID
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);


