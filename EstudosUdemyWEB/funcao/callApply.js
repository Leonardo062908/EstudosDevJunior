//Como funciona as funções call e apply?
//As funções call e apply são métodos disponíveis em todas as funções em JavaScript. Elas permitem que você chame uma função com um determinado valor de this e argumentos fornecidos individualmente (call) ou como um array (apply).

//Sintaxe do call:
// funcao.call(thisArg, arg1, arg2, ...)
//Sintaxe do apply:
// funcao.apply(thisArg, [arg1, arg2, ...])

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

console.log(produto.getPreco()); // R$ 3901.65

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // R$ 18.00 - Aqui o this se refere ao objeto global, pois a função getPreco foi chamada sem um contexto específico
console.log(getPreco.call(produto)); // R$ 3901.65 - Aqui o this se refere ao objeto produto, pois a função getPreco foi chamada usando call e passando o produto como contexto

const carro = { preco: 49990, desc: 0.2 };
console.log(getPreco.call(carro)); // R$ 39992.00 - Aqui o this se refere ao objeto carro, pois a função getPreco foi chamada usando call e passando o carro como contexto
console.log(getPreco.apply(carro)); // R$ 39992.00 - Aqui o this se refere ao objeto carro, pois a função getPreco foi chamada usando apply e passando o carro como contexto, os argumentos são passados como um array

console.log(getPreco.call(carro, 0.17, "$")); // $ 46590.80 - Aqui o this se refere ao objeto carro, pois a função getPreco foi chamada usando call e passando o carro como contexto, os argumentos são passados individualmente
console.log(getPreco.apply(carro, [0.17, "$"])); // $ 46590.80 - Aqui o this se refere ao objeto carro, pois a função getPreco foi chamada usando apply e passando o carro como contexto, os argumentos são passados como um array
