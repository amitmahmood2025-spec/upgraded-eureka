// leaderboard.js
import { db } from "./firebase-config.js";
import {
  collection, query, orderBy, limit, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function loadWeeklyTop() {
  const q = query(collection(db, "users"),
    orderBy("point","desc"), limit(10));
  const snap = await getDocs(q);
  const box = document.getElementById("leaderboard");
  box.innerHTML = "";
  snap.forEach(d=>{
    const u=d.data();
    box.innerHTML += `<li>${u.email} — ${u.point}</li>`;
  });
}