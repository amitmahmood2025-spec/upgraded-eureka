import { GAME_MODES } from "./game-modes.js";
import { t } from "./i18n.js";

export function renderModes(game){
  const box = document.getElementById("modeBox");
  box.innerHTML = "";
  GAME_MODES[game].forEach(m=>{
    box.innerHTML += `<button>${t(m)}</button>`;
  });
}