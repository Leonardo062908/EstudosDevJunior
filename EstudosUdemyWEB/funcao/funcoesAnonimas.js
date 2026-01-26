//Como funcionam as funções anônimas em JavaScript
//Basicamente, uma função anônima é uma função que não possui um nome associado a ela. Essas funções são frequentemente usadas como argumentos para outras funções ou atribuídas a variáveis.
const soma = function (x, y) {
  //Simplesmente uma função sem nome atribuída a uma variável
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  //Função que recebe outra função como parâmetro
  console.log(operacao(a, b));
};

imprimirResultado(2, 3); //Usando a função soma como padrão
imprimirResultado(2, 3, function (x, y) {
  //Passando uma função anônima diretamente como argumento
  return x - y;
});
imprimirResultado(2, 3, (x, y) => x * y); //Usando uma arrow function como função anônima

const pessoa = {
  falar: function () {
    console.log("Olá!");
  },
};
pessoa.falar(); //Chamando o método falar da pessoa
