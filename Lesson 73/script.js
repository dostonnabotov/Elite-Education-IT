const buttons = document.getElementsByTagName("button");
const siz = document.getElementById("siz");
const kompyuter = document.getElementById("kompyuter");

const kompyuterTanlovlari = ["✂️", "📜️", "🪨️"];

[...buttons].forEach((button) => {
  button.addEventListener("click", () => {
    siz.innerText = button.innerText;
    kompyuter.innerText =
      kompyuterTanlovlari[
        Math.floor(Math.random() * kompyuterTanlovlari.length)
      ];
    // console.log(button.dataset.tanlov); // text
  });
});
