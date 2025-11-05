//Entendendo atribuição por referência e por valor
const a = 7;
let b = 3;

b += a; // Atribuição aditiva, equivalente a b = b + a
console.log(b); // 10

b -= 4; // Atribuição subtrativa, equivalente a b = b - 4
console.log(b); // 6

b *= 2; // Atribuição multiplicativa, equivalente a b = b * 2
console.log(b); // 12

b /= 3; // Atribuição divisiva, equivalente a b = b / 3
console.log(b); // 4

b %= 3; // Atribuição modular, equivalente a b = b % 3
console.log(b); // 1
