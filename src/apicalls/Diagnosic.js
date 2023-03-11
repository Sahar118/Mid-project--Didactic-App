
import { async } from '@firebase/util';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore'
import firestoreDatabase from "../firebaseConfig";


export const AddDiagnosic = async (payload) => {
    try {
        await addDoc(collection(firestoreDatabase, "diagnosic"), payload)
        return {
            success: true,
            message: "המאבחן נוסף בהצלחה, חכה לאישור",
        }

    } catch (error) {
        return {
            success: false,
            message: error.message,
        }

    }
}

export const GetDiagnosicById = async (id) => {
    try {
        const Diagnosic = await getDoc(doc(firestoreDatabase, "diagnosic", id))
        if (!Diagnosic.exists()) {
            throw new Error('מאבחן לא נמצא')
        }
        return {
            success: true,
            data: Diagnosic.data()
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }

    }
}