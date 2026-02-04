//Aprendendo como declarar funções em JavaScript
//Function Declaration, funciona como uma declaração tradicional
//Esse tipo de função, o  interpretador "eleva" (hoisting) a função para o topo do código, pois ele lê todo o código antes de executá-lo
function soma(x, y) {
  return x + y;
}

//Function Expression
//Funciona como uma variável que armazena uma função
const sub = function (x, y) {
  return x - y;
};

//Agora com as duas formas de declarar funções, podemos usá-las
//Named Function Expression
const mult = function multiplicacao(x, y) {
  return x * y;
};
