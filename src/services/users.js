import { collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const deleteUser = (uid) => {
  const docRef = doc(collection(db, "users"), uid);
  return deleteDoc(docRef);
};

export { deleteUser };
