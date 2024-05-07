import { ref } from "firebase/database"
import { database } from "../../../firebase"

export const proofRef =(id, val) => ref(database, 'proofFile/'+ id +'/'+ val);
export const getProofRef =(val, id) => ref(database, 'proofFile/'+ id +'/'+ val)

