const btn = document.getElementById("btn");
const text = document.getElementById("text");
const raqam = document.getElementById("raqam");

const maqollar = [
  "Til bilgan el biladi",
  "Mehnatning tagi rohat",
  "Kuch adolatda",
  "7 o'lchab, 1 kes",
  "Til dil kaliti",
];

btn.addEventListener("click", () => {
  let maqol = maqollar[Math.floor(Math.random() * maqollar.length)];
  text.innerText = maqol;
  raqam.innerText = maqollar.indexOf(maqol) + 1;
});
