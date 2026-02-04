//Factory funciona como uma função que retorna um objeto
//O exemplo abaixo apresenta uma problemática de ter que repetir código para criar objetos similares
//para resolver isso, podemos usar uma factory function
const produto1 = {
  nome: "Caneta",
  preco: 1.5,
};

const produto2 = {
  nome: "Caderno",
  preco: 15.0,
};

//Exemplo acima só que com a factory function
function criarProduto(nome, preco) {
  return {
    nome: nome,
    preco: preco,
  };
}

//Neste caso, usamos o factory para criar novos produtos sem repetir código
//Como passamos nome: nome, podemos apenas atribuir um valor para essa variável
//e o JS entende que o primeiro nome é a chave do objeto e o segundo é o valor atribuído
console.log(criarProduto("Borracha", 0.75));
console.log(criarProduto("Lápis", 0.5));
