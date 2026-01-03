//Aprendendo sobre Cidadão de Primeira Classe em JavaScript
//Em JavaScript, funções são tratadas como cidadãos de primeira classe
//Isso significa que funções podem ser atribuídas a variáveis, passadas como argumentos para outras funções e retornadas de outras funções
//High-order functions são funções que operam em outras funções, seja recebendo-as como argumentos ou retornando-as como resultado
//Criar como forma literal

function fun1() {} //É importante que seja um bloco de código que pode ser chamado posteriormente

//Armazenar em uma variável
const fun2 = function () {};

//Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3)); //Chama a função que está na posição 0 do array

//Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

//Passar função como parâmetro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
}); //Passa uma função anônima como parâmetro

//Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4); //Chama a função soma que retorna outra função e já passa o parâmetro para a função retornada
console.log(typeof soma(2, 3)); //Mostra que o retorno de soma é uma função
const cincoMais = soma(2, 3); //Armazena a função retornada em uma variável
cincoMais(4); //Chama a função armazenada na variável cincoMais passando o parâmetro 4
