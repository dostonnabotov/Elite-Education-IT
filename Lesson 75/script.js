const buttons = document.getElementsByTagName("button");
const siz = document.getElementById("siz");
const kompyuter = document.getElementById("kompyuter");
const natija = document.getElementById("natija");

const kompyuterTanlovlari = ["✂️", "📜️", "🪨️"];

[...buttons].forEach((button) => {
  button.addEventListener("click", () => {
    let xohishiyTanlov = Math.floor(Math.random() * kompyuterTanlovlari.length);

    // tanlovlarni aniqlash
    let sizTanlov = button.innerText;
    let kompyuterTanlov = kompyuterTanlovlari[xohishiyTanlov];

    // tanlovlarni HTML da ko'rsatish
    siz.innerText = sizTanlov;
    kompyuter.innerText = kompyuterTanlov;

    let yutganBall = yutganniTopish(sizTanlov, kompyuterTanlov);
    if (yutganBall == 1) {
      natija.innerText = "Siz";
    } else if (yutganBall == -1) {
      natija.innerText = "Kompyuter";
    } else {
      natija.innerText = "Durrang";
    }
  });
});

function yutganniTopish(sizTanlov, kompyuterTanlov) {
  let ball;

  if (sizTanlov == "✂️" && kompyuterTanlov == "✂️") {
    ball = 0;
  } else if (sizTanlov == "✂️" && kompyuterTanlov == "📜️") {
    ball = 1;
  } else if (sizTanlov == "✂️" && kompyuterTanlov == "🪨️") {
    ball = -1;
  } else if (sizTanlov == "📜️" && kompyuterTanlov == "✂️") {
    ball = -1;
  } else if (sizTanlov == "📜️" && kompyuterTanlov == "📜️") {
    ball = 0;
  } else if (sizTanlov == "📜️" && kompyuterTanlov == "🪨️") {
    ball = 1;
  } else if (sizTanlov == "🪨️" && kompyuterTanlov == "✂️") {
    ball = 1;
  } else if (sizTanlov == "🪨️" && kompyuterTanlov == "📜️") {
    ball = -1;
  } else if (sizTanlov == "🪨️" && kompyuterTanlov == "🪨️") {
    ball = 0;
  }

  return ball;
}

/**
 * Men vs Kompyuter => Natija
 * ✂️      ✂️            Durrang - 0
 * ✂️      📜️           Man - 1
 * ✂️      🪨️           U - -1
 * 📜️     ✂️            U - -1
 * 📜️     📜️           Durrang - 0
 * 📜️     🪨️           Man - +1
 * 🪨️     ✂️            Man - +1
 * 🪨️     📜️           U - -1
 * 🪨️     🪨️           Durrang - 0
 *
 */
