//Revisão de como funcionam objetos
//Uma coleção dinâmica de pares chave-valor, onde as chaves são strings (ou símbolos) e os valores podem ser de qualquer tipo de dados, incluindo outros objetos, funções, arrays, etc.
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Genérica";
produto.preco = 220;

console.log(produto); //Aqui irá exibir o objeto completo, mostrando as chaves e seus respectivos valores.
console.log(produto.nome); //Aqui irá exibir apenas o valor associado à chave 'nome', que é 'Cadeira

delete produto.preco; //Aqui estamos removendo a chave 'preco' do objeto 'produto'.
console.log(produto); //Aqui irá exibir o objeto atualizado, mostrando apenas as chaves 'nome' e 'marca do produto', já que a chave 'preco' foi deletada.

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Leo",
    idade: 20,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
      complemento: "Apto 101",
    },
    condutores: [
      {
        nome: "Junior",
        idade: 19,
      },
      {
        nome: "Ana",
        idade: 42,
      },
    ],
    calcularValorSeguro: function () {
      //...
    },
  },
};

carro.proprietario.endereco.numero = 1000; //Aqui estamos acessando a chave 'numero' dentro do objeto 'endereco', que por sua vez está dentro do objeto 'proprietario', e atualizando seu valor para 1000.
carro.proprietario.endereco.logradouro = "Av Gigante"; //Aqui estamos acessando a chave 'logradouro' dentro do objeto 'endereco', que por sua vez está dentro do objeto 'proprietario', e atualizando seu valor para 'Av Gigante'.
carro.proprietario.condutores.push({ nome: "Junior", idade: 19 }); //Aqui estamos acessando a chave 'condutores', que é um array dentro do objeto 'proprietario', e usando o método 'push' para adicionar um novo objeto representando um condutor com nome 'Junior' e idade 19.
delete carro.proprietario.calcularValorSeguro; //Aqui estamos acessando a chave 'calcularValorSeguro', que é uma função dentro do objeto 'proprietario', e usando o operador 'delete' para removê-la do objeto.
console.log(carro); //Aqui irá exibir o objeto 'carro' atualizado, mostrando as mudanças feitas nas chaves 'numero', 'logradouro', a adição do novo condutor e a remoção da função 'calcularValorSeguro'.
