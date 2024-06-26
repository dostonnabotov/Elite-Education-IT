// a + b - c
// console.log(2 + 3 - 4);
// console.log(7 + 4 - 1);
// console.log(5 + 3 - 8);
// console.log(7 + 4 - 3);

function ayirish() {
  console.log(7 - 3); // 4
}

// ayirish(); // 4
// ayirish(); // 4
// ayirish(); // 4
// ayirish(); // 4

// a + b - c
function formula(raqam1, raqam2, raqam3) {
  console.log(raqam1 + raqam2 - raqam3);
}

// formula(2, 5, 1); // 6
// formula(7, 3, 5); // 5

// a * c + b
function formula2(a, b, c) {
  console.log(a * c + b);
}

// formula2(5, 12, 9); // 5 * 9 + 12 = 57
// formula2(4, 10, 7); // 4 * 7 + 10 = 38

// Salom, [ism]
function salomBer(ism) {
  console.log("Salom, " + ism);
}

// salomBer("Amirbek");
// salomBer("Sardor");

// Salom, mening ismim [ism]. Mening yoshim [yosh]da. Men hozir [sinf] da o'qiyman.
function tanishtirish(ism, yosh, sinf) {
  console.log(
    `Salom, mening ismim ${ism}. Mening yoshim ${yosh}da. Men hozir ${sinf}-sinfda o'qiyman.`
  );
}

tanishtirish("Sardor", 14, 7);
tanishtirish("Abdumalik", 13, 7);
tanishtirish("Temur", 17, 12);
