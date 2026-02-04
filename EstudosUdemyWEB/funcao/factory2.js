function criarProduto(nome, preco) {
  return {
    nome, //Não é necessário repetir nome: nome, pois o JS entende que é a chave e o valor
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("Caneta", 1.5)); //Factory funciona como uma função que retorna um objeto
//O exemplo abaixo apresenta uma problemática de ter que repetir código para criar objetos similares
//para resolver isso, podemos usar uma factory function
console.log(criarProduto("Caderno", 15.0));
