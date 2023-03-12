
import { async } from '@firebase/util';
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import firestoreDatabase from "../firebaseConfig";


export const AddDiagnosic = async (payload) => {
    try {
        await setDoc(doc(firestoreDatabase, "diagnosic", payload.userId), payload)

        await updateDoc(doc(firestoreDatabase, 'users', payload.userId), {
            role: "diagnosic",
        })
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

export const UpdateDiacnosic = async (payload) => {
    try {
        await setDoc(doc(firestoreDatabase, "diagnosic", payload.id), payload);
        return {
            success: true,
            message: " עודכן בהצלחה",
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}

export const GetDiagnosicById = async (id) => {
    try {
        const diagnosic = await getDoc(doc(firestoreDatabase, "diagnosic", id));
        return {
            success: true,
            data: diagnosic.data()
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };

    }
}