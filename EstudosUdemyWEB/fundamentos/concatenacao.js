//Aprendendo sobre template strings e concatenação em JavaScript
const nome = "João";
const concatenação = "Olá " + nome + "!";
const template = `
    Olá 
    ${nome}!`; //Não abre com aspas simples ou duplas, mas com crase (`)
/*
    Template string permite a quebra de linha e a interpolação de variáveis ou expressões com ${...}
    */
console.log(concatenação, template);
console.log(`1 + 1 = ${1 + 1}`); // Interpolando uma expressão matemática dentro da template string

const up = (texto) => texto.toUpperCase(); // Função que converte o texto para maiúsculas
console.log(`Ei... ${up("teste")}!`); // Usando a função dentro da template string
