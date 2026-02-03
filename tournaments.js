// tournaments.js
import { db, auth, functions } from "./firebase-config.js";
import {
  collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { httpsCallable } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js";

export async function loadTournaments() {
  const grid = document.querySelector(".tournaments-grid");
  grid.innerHTML = "";
  const snap = await getDocs(collection(db, "tournaments"));

  snap.forEach(d => {
    const t = d.data();
    grid.innerHTML += `
      <div class="tournament-card">
        <h3>${t.title}</h3>
        <p>Entry: ৳${t.entryFee}</p>
        <p>Prize: ৳${t.prize}</p>
        <p>${t.joined}/${t.maxPlayers}</p>
        <button onclick="joinMatch('${d.id}')">Join</button>
      </div>`;
  });
}

window.joinMatch = async (matchId) => {
  const fn = httpsCallable(functions, "joinTournament");
  await fn({ matchId });
  alert("Joined");
};