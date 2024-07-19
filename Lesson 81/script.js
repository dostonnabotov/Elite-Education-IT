const ekran = document.getElementById("ekran");
const emoji = document.getElementById("emoji");
ekran.innerHTML = window.innerWidth + "px";

window.addEventListener("resize", () => {
  ekran.innerHTML = window.innerWidth + "px";

  if (window.innerWidth < 400) {
    emoji.innerText = "🖐️";
  } else if (window.innerWidth < 900) {
    emoji.innerText = "🛻️";
  } else {
    emoji.innerText = "🔥️";
  }
});
