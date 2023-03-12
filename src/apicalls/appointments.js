
// import { async } from "@firebase/util";
// import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
// import firestoreDatabase from "../firebaseConfig";


// export const BookDiagnosicAppointment = async (payload) => {
//     try {
//         await addDoc(collection(firestoreDatabase, "appointments"), payload)
//         return { success: true, message: " הזמנת התור הצליחה" }
//     } catch (error) {
//         return { success: false, message: error.message }
//     }
// }

// export const GetDiagnosicAppointmentsOnDate = async (diagnosicId, data) => {
//     try {
//         const querySnapshot = await getDocs(
//             query(
//                 collection(firestoreDatabase, "appointments"),
//                 where("diagnosicId", '==', diagnosicId),
//                 where("data", "==", data)
//             )
//         )
//         const data = [];
//         querySnapshot.forEach((doc) => {
//             data.push(doc.data)
//         })
//     }

// }