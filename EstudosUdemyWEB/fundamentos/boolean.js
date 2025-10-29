// Aprendendo sobre valores booleanos em JavaScript
let isAtivo = false; // Atribuição de valor booleano false
console.log(isAtivo); // Exibe o valor atual de isAtivo (false)

isAtivo = true; // Atribuição de valor booleano true
console.log(isAtivo); // Exibe o valor atual de isAtivo (true)

isAtivo = 1; // Atribuição de valor numérico 1 (truthy)
console.log(!!isAtivo); // Dupla negação converte o valor para booleano (true)
console.log(!!" ");
console.log(!!"texto");
console.log(!!"-1");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // Atribuição dentro da expressão retorna true

//Abaixo estão os valores considerados falsy em JavaScript
console.log(!!0); // false
console.log(!!""); // String vazia se torna false
console.log(!!null); // null se torna false
console.log(!!undefined); // undefined se torna false
console.log(!!(isAtivo = false)); // Atribuição dentro da expressão retorna false

console.log("para finalizar...");
console.log(!!("" || null || 0 || " ")); // Avaliação de expressão lógica com valores falsy e truthy
console.log("" || null || 0 || "epa!"); // Retorna o primeiro valor truthy encontrado

let nome = "";
console.log(nome || "Desconhecido"); // Retorna "Desconhecido" se nome for falsy, caso o usuário não informar um nome

nome = "Lucas";
console.log(nome || "Desconhecido"); // Retorna o valor de nome se for truthy
