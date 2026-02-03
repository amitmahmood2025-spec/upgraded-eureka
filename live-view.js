window.openLive = function(){
  const modal = document.createElement("div");
  modal.innerHTML = `
    <div style="
      position:fixed;inset:0;
      background:#000c;
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999">
      <div style="width:90%;max-width:800px">
        <iframe
          src="ABOUT:BLANK"
          width="100%"
          height="450"
          allowfullscreen>
        </iframe>
        <button onclick="this.parentElement.parentElement.remove()">
          Close
        </button>
      </div>
    </div>`;
  document.body.appendChild(modal);
};