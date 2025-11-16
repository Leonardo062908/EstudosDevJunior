const [a, b, c] = [10, 20, 30]; //Destructuring de array
console.log(a, b, c);

const soma = a + b + c; //Usando condição aritmética simples para somar os valores
console.log(soma);

const subtracao = c - b; //Usando condição artmética simples para subtrair valores
const multiplicacao = a * b; //Usando condição aritmética simples para multiplicar valores
const divisao = c / a; //Usando condição aritmética simples para dividir valores
const modulo = b % a; //Usando condição aritmética simples para obter o resto da divisão
console.log(subtracao, multiplicacao, divisao, modulo);

//Existem operandos binários (que operam com dois valores) e unários (que operam com um valor)
let incremento = 5;
console.log(++incremento); //Operador unário de incremento, adiciona 1 ao valor de incremento
let decremento = 5;
console.log(--decremento); //Operador unário de decremento, subtrai 1 do valor de decremento
