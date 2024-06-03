// BYT: index.js
console.log("Hello, world!");

const button = document.getElementById("rang");

let ranglar = ["purple", "orange", "red", "green"];

button.addEventListener("click", () => {
  const random = (len) => Math.floor(Math.random() * len);
  let randomRang = ranglar[random(ranglar.length)];
  document.body.style.backgroundColor = randomRang;
});
