// Math
// PI = 3.14
// console.log(Math.PI); // 3.14159....

// _/9 = 3 => ildiz ostini topish
// _/81 = 9
// console.log(3 + 1); // 4
// console.log(9 / 3); // 3
// console.log(Math.sqrt(9)); // 3
// console.log(Math.sqrt(81)); // 9
// console.log(Math.sqrt(0)); // 0
// console.log(Math.sqrt(-9)); // NaN

// darajaga ko'paytirish
// 4^1 = 4, 4^2 = 16, 4^3 = 64, 4^4 = 256
// console.log(Math.pow(4, 1)); // 4
// console.log(Math.pow(4, 2)); // 16
// console.log(Math.pow(4, 3)); // 64
// console.log(Math.pow(4, 4)); // 256

// butun sonlarni aniq topish
// 5.3 => 5; 5.5 => 6; 5.4 => ?
// console.log(Math.round(5.3)); // 5
// console.log(Math.round(5.4)); // 5
// console.log(Math.round(5.41)); // 5
// console.log(Math.round(5.49)); // 5
// console.log(Math.round(5.5)); // 6
// console.log(Math.round(5.9)); // 6

// butun sonlarni pastga tushurish
// console.log(Math.floor(7.1)); // 7
// console.log(Math.floor(7.4)); // 7
// console.log(Math.floor(7.6)); // 7
// console.log(Math.floor(7.99)); // 7

// butun sonlarni tepaga ko'tarish
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.4)); // 5
// console.log(Math.ceil(4.6)); // 5
// console.log(Math.ceil(4.9)); // 5

// xohishiy raqam ko'rsatish

// console.log(Math.random()); // 0.0000...1 => 0.9999...
// console.log(Math.random() * 10); // 0.00...1 => 9.9999...

let butunXohishiySon = Math.random() * 10;
console.log(Math.round(butunXohishiySon));
