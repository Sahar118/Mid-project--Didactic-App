
import { async } from '@firebase/util';
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import firestoreDatabase from "../firebaseConfig";


export const AddDiagnosic = async (payload) => {
    try {
        await setDoc(doc(firestoreDatabase, "diagnosic", payload.userId), payload)
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


export const checkIfDigAccountIsApplied = async (id) => {
    try {
        const dignosic = await getDocs(
            query(collection(firestoreDatabase, "diagnosic"), where("userId", "==", id))
        )
        if (dignosic.size > 0) {
            return {
                success: true,
                message: "החשבון אושר"
            }
        }
        return {
            success: false,
            message: 'החשבון שלא אושר'
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}

export const getAllDiagnosic = async () => {
    try {
        const dignosic = await getDocs(collection(firestoreDatabase, "diagnosic"))
        return {
            success: true,
            data: dignosic.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            }),
        }

    } catch (error) {
        return {
            success: false,
            message: error.message,
        }

    }
}