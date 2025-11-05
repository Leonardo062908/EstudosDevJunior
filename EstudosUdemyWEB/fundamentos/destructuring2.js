// Aprendendo destructuring com arrays em JavaScript
const [a] = [10];
console.log(a); // 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // Posso pular elementos do array usando vírgulas e definir valores padrão
console.log(n1, n3, n5, n6); // 10 9 8 0

const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8],
];
console.log(nota); // 6
