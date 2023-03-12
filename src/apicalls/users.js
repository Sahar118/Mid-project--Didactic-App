import firestoreDatabase from "../firebaseConfig";
import { collection, addDoc, getDocs, query, where, getDoc, doc } from 'firebase/firestore'
import CryptoJS from "crypto-js";
import { async } from "@firebase/util";
// import sha256 from 'crypto-js/sha256';

export const CreateUser = async (payload) => {
    try {

        const qry = query(collection(firestoreDatabase, "users"), where("email", "==", payload.email));
        const querySnapshot = await getDocs(qry);

        if (querySnapshot.size > 0) {
            throw new Error("משתמש כבר קיים")
        }
        const hashedPassword = CryptoJS.AES.encrypt(
            payload.password,
            'Didactic-App'
        ).toString();
        payload.password = hashedPassword;


        const docRef = collection(firestoreDatabase, "users")
        await addDoc(docRef, payload)
        return {
            success: true,
            message: " חשבון המשתמש נוצר בהצלחה"
        }

    } catch (error) {
        return error;
    }
}


export const LoginUser = async (payload) => {
    try {
        const qry = query(
            collection(firestoreDatabase, "users"),
            where("email", "==", payload.email)
        )
        const userSnapshot = await getDocs(qry)
        if (userSnapshot.size === 0) {
            throw new Error('שם משתמש אינו קיים ')
        }

        const user = userSnapshot.docs[0].data()
        user.id = userSnapshot.docs[0].id
        const bytes = CryptoJS.AES.decrypt(user.password, "Didactic-App")
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)

        if (originalPassword !== payload.password) {
            throw new Error('סיסמה שגויה')
        }
        return {
            success: true,
            message: "המשתמש התחבר בהצלחה",
            data: user,
        }

    } catch (error) {
        return error;
    }
}

export const getAllUsers = async () => {
    try {
        const users = await getDocs(collection(firestoreDatabase, "users"))
        return {
            success: true,
            data: users.docs.map((doc) => {
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

export const GetUserById = async (id) => {
    try {
        const user = await getDoc(doc(firestoreDatabase, "users", id));
        return {
            success: true,
            data: {
                ...user.data(),
                id: user.id,
            },
        };
    } catch (error) {
        return error;
    }
}