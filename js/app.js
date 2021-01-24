const banner = document.getElementsByClassName("banner")[0];
const blocks = document.getElementsByClassName("blocks");

for (let i = 0; i < 400; i++) {
  banner.innerHTML += "<div class='blocks'></div>";
  const duration = Math.random() * 5;
  blocks[i].style.animationDuration = 2 + duration + "s";
  blocks[i].style.animationDelay = duration + "s";
}
