// dashboard-core.js
import { auth, db } from "./firebase-config.js";
import { protectPage } from "./auth.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

protectPage();

auth.onAuthStateChanged(async (user) => {
  if (!user) return;

  const snap = await getDoc(doc(db, "users", user.uid));
  if (!snap.exists()) return;

  const data = snap.data();

  document.querySelectorAll(".balance-amount").forEach(el => {
    el.textContent = `৳${data.credit}`;
  });

  document.getElementById("stat-matches").textContent = data.matches;
  document.getElementById("stat-wins").textContent = data.wins;
  document.getElementById("stat-points").textContent = data.point;
});