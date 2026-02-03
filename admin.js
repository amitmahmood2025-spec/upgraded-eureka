// admin.js
import { db, auth } from "./firebase-config.js";
import {
  addDoc, collection, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.createTournament = async () => {
  const title = document.getElementById("title").value;
  const entryFee = +document.getElementById("entryFee").value;
  const prize = +document.getElementById("prize").value;

  await addDoc(collection(db, "tournaments"), {
    title, entryFee, prize,
    maxPlayers: 50,
    joined: 0,
    status: "open",
    createdAt: serverTimestamp()
  });
  alert("Created");
};