// branding-fix.js
import { APP } from "./app-config.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-app-name]").forEach(e => {
    e.textContent = APP.NAME;
  });

  document.querySelectorAll("[data-tagline]").forEach(e => {
    e.textContent = APP.TAGLINE;
  });

  document.querySelectorAll("[data-currency]").forEach(e => {
    e.textContent = APP.CURRENCY;
  });
});