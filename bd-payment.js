import { db, auth } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.requestWithdraw = async function(){
  const amount = Number(document.getElementById("wdAmount").value);
  const method = document.getElementById("wdMethod").value;
  const number = document.getElementById("wdNumber").value;

  await addDoc(collection(db,"withdraws"),{
    uid: auth.currentUser.uid,
    amount,
    method,
    number,
    status:"pending",
    created: serverTimestamp()
  });

  alert("Withdraw request sent.");
};