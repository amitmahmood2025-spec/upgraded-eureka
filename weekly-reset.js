// weekly-reset.js
import { db } from "./firebase-config.js";
import { collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function resetWeeklyPoints(){
  const snap=await getDocs(collection(db,"users"));
  snap.forEach(d=>updateDoc(doc(db,"users",d.id),{point:0}));
}