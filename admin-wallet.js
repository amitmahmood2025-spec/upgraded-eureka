import { db } from "./firebase-config.js";
import { collection, getDocs, updateDoc, doc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { addBalance } from "./wallet-core.js";

export async function approveDeposit(id,uid,amount){
  await updateDoc(doc(db,"deposits",id),{status:"approved"});
  await addBalance(uid,amount);
}