// mobile-sidebar-fix.js
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.createElement("div");

  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  menuBtn?.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", closeSidebar);

  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", closeSidebar);
  });
});