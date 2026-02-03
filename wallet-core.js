import { db, auth } from "./firebase-config.js";
import { doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function getWallet(uid){
  const ref = doc(db,"wallets",uid);
  const snap = await getDoc(ref);
  if(!snap.exists()){
    await setDoc(ref,{balance:0});
    return 0;
  }
  return snap.data().balance;
}

export async function addBalance(uid,amount){
  const ref = doc(db,"wallets",uid);
  const snap = await getDoc(ref);
  const bal = snap.exists()?snap.data().balance:0;
  await updateDoc(ref,{balance:bal+amount});
}