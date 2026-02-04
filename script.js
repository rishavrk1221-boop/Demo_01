
function playMusic() {
  document.getElementById("song").play();
}

function startGame() {
  document.getElementById("gameBox").classList.remove("hidden");
}

function yes() {
  alert("Yay! You made Rishav the happiest person alive ❤️");
}

function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 200 + "px";
  btn.style.top = Math.random() * 200 + "px";
}
