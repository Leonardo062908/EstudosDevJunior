// Estudarei sobre strings em JavaScript
const escola = "Cod3r";

console.log(escola.charAt(4)); // charAt() retorna o caractere na posição indicada, começando do zero
console.log(escola.charAt(5)); // Se a posição não existir, retorna string vazia porque o JS é flexível aos erros
console.log(escola.charCodeAt(3)); // charCodeAt() retorna o valor Unicode do caractere na posição indicada
console.log(escola.indexOf("3")); // indexOf() retorna a posição do caractere indicado, coemçando do zero também
console.log(escola.substring(1)); // substring() retorna a string a partir da posição indicada até o final
console.log(escola.substring(0, 3)); // substring(inicio, fim) retorna a string do índice inicial até o índice final - 1
console.log("Escola ".concat(escola).concat("!")); // concat() concatena strings
console.log(escola.replace(3, "6")); // replace() substitui o caractere indicado pelo novo caractere
console.log("Ana,Maria,Pedro".split(",")); // split() divide a string em um array, usando o caractere indicado como separador

//Importante lembrar que strings são imutáveis em JavaScript. Ou seja, qualquer operação que modifique uma string na verdade cria uma nova string.
