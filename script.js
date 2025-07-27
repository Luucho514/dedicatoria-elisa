const loveButton = document.getElementById("loveButton");
const responseMessage = document.getElementById("responseMessage");

loveButton.addEventListener("click", () => {
  responseMessage.textContent = "¡Yo también te quiero, Elisa! 💖";
});

// Producción de corazones animados
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);
