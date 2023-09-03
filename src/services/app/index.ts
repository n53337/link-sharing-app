import { firebaseDb } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const isUsernameValid = async (username: string): Promise<boolean> => {
  try {
    const usersRef = collection(firebaseDb, "Users");
    const q = query(usersRef, where("username", "==", username));
    const qSnap = await getDocs(q);
    return qSnap.empty;
  } catch (error) {
    return false;
  }
};
