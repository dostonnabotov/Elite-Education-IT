// Yomon usul
let meva1 = "Olma";
let meva2 = "Nok";
let meva3 = "Anor";
let meva4 = "Banan";

// console.log(meva1, meva2, meva3, meva4);
// console.log(meva3);

// Yaxshi usul - Array
let mevalar = ["olma", "nok", "anor", "banan"];

// console.log(mevalar);
// console.log(mevalar[1]);
// console.log(mevalar.length);

// IT studentlar
let IT_studentlar = [
  "Ruslan",
  "Sardor",
  "Umid",
  "Abdumalik",
  "Temur",
  "Amirbek",
  "Ibrohim",
  "Asilbek",
  "Sardor",
];

// console.log(IT_studentlar); // hammasi
// console.log(IT_studentlar.length); // 9

// oxirida qo'shish
IT_studentlar.push("Saidamir", "Samir");
IT_studentlar.push("Shoxjahon");
IT_studentlar.push("Asad");

// boshida qo'shish
IT_studentlar.unshift("Asadbek");

// oxiridan olish
IT_studentlar.pop();

// boshidan olish
IT_studentlar.shift();
IT_studentlar.shift();
IT_studentlar.shift();

IT_studentlar.push("Asadbek");

// console.log(IT_studentlar);

let mashinalar = [
  "Lamborghini",
  "Bugatti",
  "BMW",
  "Mercedes Benz",
  "Supra",
  "Ford Mustang",
];

console.log(mashinalar);

mashinalar = ["Ferrari", ...mashinalar, "Tesla", "BYD"];

console.log(mashinalar);
