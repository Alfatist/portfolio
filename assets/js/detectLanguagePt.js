document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language || navigator.userLanguage; // Detecta o idioma do navegador
  if (userLang.startsWith("pt")) { // Se o idioma for português
    setTimeout(showLanguagePopupPt, 3000);
  }
});

function showLanguagePopupPt() {
  
  const popup = document.createElement("div");
  const seconds = 5;
  popup.innerHTML = `
    <div style="
      position: fixed; bottom: 20px; right: 20px; 
      background: rgba(0, 0, 0, 0.8); color: #fff; padding: 12px 20px;
      border-radius: 8px; font-size: 14px; 
      display: flex; align-items: center; gap: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      opacity: 0;
      animation: fadeIn ${seconds}s ease-in-out;">
      <span>Gostaria de ir para a página em português?</span>
      <button onclick="window.location.href='/pt/'" style="
        background: #f39c12; color: white; border: none; padding: 6px 12px; 
        border-radius: 5px; cursor: pointer; display: flex; align-items: center;">Sim</button>
      <button onclick="this.parentElement.remove()" style="
        background: transparent; border: none; color: #aaa; cursor: pointer; font-size: 16px;">✖</button>
    </div>
    <style>
      @keyframes fadeIn {
        0% { opacity: 0; }
        10% { opacity: 1; }
        85% { opacity: 1; }
        100% { opacity: 0; }
      }
    </style>
  `;
  document.body.appendChild(popup);
  let removeChild = () => {document.body.removeChild(popup)};
  setTimeout(removeChild, seconds*1000)
  
}