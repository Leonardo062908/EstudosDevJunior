// Aprendendo sobre arrays em JavaScript, para agrupar múltiplos valores em uma única variável
let frutas = ["Maçã", "Banana", "Laranja"]; // Declaração de um array com três elementos (frutas)
let feira = ["Tomate", "Cenoura", "Alface", frutas]; // Declaração de um array que inclui outro array (frutas)

console.log(frutas); // Exibe o array frutas
console.log(feira); // Exibe o array feira, que contém o array frutas como um de seus elementos

const valores = [7.7, 8.9, 6.3, 9.2]; // Declaração de um array de valores numéricos (notas)
console.log(valores[0], valores[3]); // Acessa e exibe os elementos do array valores nos índices 0 e 3

valores[4] = 10; // Adiciona um novo elemento (10) ao array valores no índice 4
console.log(valores); // Exibe o array valores atualizado
console.log(valores.length); // Exibe o tamanho (número de elementos) do array valores

valores.push({ id: 3 }, false, null, "teste"); // Retorna o array ["Maçã", "Banana", "Laranja"]
console.log(valores); // Exibe o array valores após adicionar novos elementos de diferentes tipos

console.log(valores.pop()); // Remove e exibe o último elemento do array valores ("teste")
delete valores[0]; // Remove o elemento no índice 0 do array valores
console.log(valores); // Exibe o array valores após a remoção do elemento no índice 0
console.log(typeof valores); // Exibe o tipo do array valores (object)

//Lembrando que não é uma boa prática misturar tipos diferentes em um array, mas JavaScript permite isso! Diferente do TypeScript que é mais rígido com tipos, por exemplo.
