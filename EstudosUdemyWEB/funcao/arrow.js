//A função arrow é mais curta, e funciona de forma diferente em relação ao 'this'
//O foco dela é o contexto léxico onde ela foi definida

let dobro = function (a) {
  //Função tradicional
  return 2 * a;
};

dobro = (a) => {
  //Usada a função arrow, podemos ver que é mais curta e direta comparada a função tradicional
  return 2 * a;
};

dobro = (a) => 2 * a; //Podemos simplificar ainda mais, quando tem apenas um parâmetro e uma única expressão no corpo da função. E tem um retorno implícito
console.log(dobro(Math.PI)); //Chama a função dobro com o valor de PI

let ola = function () {
  return "Olá";
};

ola = () => "Olá"; //Função arrow sem parâmetros, usa parênteses vazios
console.log(ola()); //Chama a função ola
ola = (nome = "Mundo") => "Olá " + nome + "!"; //Função arrow com parâmetro padrão
console.log(ola());
ola = (_) => "Olá Mundo!"; //Usando '_' para indicar que o parâmetro não será usado
console.log(ola());
