
import { addDoc, collection } from 'firebase/firestore'
import firestoreDatabase from "../firebaseConfig";


export const AddDiagnosic = async (payload) => {
    try {
        await addDoc(collection(firestoreDatabase, "diagnosics"), payload)
        return {
            success: true,
            message: "המאבחן נוסף בהצלחה, חכה לאישור"
        }

    } catch (error) {


    }
}