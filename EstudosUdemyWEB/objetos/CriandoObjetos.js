//Criando objetos para praticar a sintaxe de objetos em JavaScript
//Criando um objeto usando notação literal
const obj1 = {};
console.log(obj1); //Aqui irá exibir um objeto vazio, pois não foram adicionadas chaves ou valores a ele.

//Object em JS
console.log(typeof Object, typeof new Object()); //Aqui irá exibir 'function' para 'Object', pois é uma função construtora, e 'object' para 'new Object()', pois é uma instância de um objeto criado a partir da função construtora 'Object'.
const obj2 = new Object();
console.log(obj2); //Aqui irá exibir um objeto vazio, pois não foram adicionadas chaves ou valores a ele.

//Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome; //Aqui estamos atribuindo o valor do parâmetro 'nome' à chave 'nome' do objeto que será criado a partir desta função construtora.
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc); //Aqui estamos calculando o preço com desconto, multiplicando o preço original pelo fator de desconto (1 - desc).
  };
}

const produto1 = new Produto("Caneta", 7.99, 0.15); //Aqui estamos criando um novo objeto 'produto1' a partir da função construtora 'Produto', passando os valores 'Caneta', 7.99 e 0.15 como argumentos para os parâmetros 'nome', 'preco' e 'desc', respectivamente.
console.log(produto1.nome); //Aqui estamos acessando a chave 'nome' do objeto 'produto1' e exibindo seu valor no console, que será 'Caneta', porém sem o desconto aplicado.
const produto2 = new Produto("Notebook", 2999.99, 0.25); //Aqui estamos criando um novo objeto 'produto2' a partir da função construtora 'Produto', passando os valores 'Notebook', 2999.99 e 0.25 como argumentos para os parâmetros 'nome', 'preco' e 'desc', respectivamente.
console.log(produto2.getPrecoComDesconto()); //Aqui estamos chamando o método 'getPrecoComDesconto' do objeto 'produto2', que irá calcular e retornar o preço com desconto, e em seguida exibir esse valor no console.

//Função Factory
//Posso usar tanto uma função construtora interna, ou uma notação literal, para criar objetos usando uma função factory.
//Criando com notação literal
function criarFuncionario(nome, salarioBase, promocao) {
  return {
    nome,
    salarioBase,
    promocao,
    getSalario() {
      return salarioBase * (1 + promocao); //Aqui estamos calculando o salário total do funcionário, multiplicando o salário base pelo fator de promoção (1 + promocao).
    },
  };
}

const funcionario1 = criarFuncionario("João", 2000, 0.1); //Aqui estamos criando um novo objeto 'funcionario1' a partir da função factory 'criarFuncionario', passando os valores 'João', 2000 e 0.1 como argumentos para os parâmetros 'nome', 'salarioBase' e 'promocao', respectivamente.
console.log(funcionario1.getSalario()); //Aqui estamos chamando o método 'getSalario' do objeto 'funcionario1', que irá calcular e retornar o salário total do funcionário, e em seguida exibir esse valor no console.
const funcionario2 = criarFuncionario("Maria", 3000, 0.2); //Aqui estamos criando um novo objeto 'funcionario2' a partir da função factory 'criarFuncionario', passando os valores 'Maria', 3000 e 0.2 como argumentos para os parâmetros 'nome', 'salarioBase' e 'promocao', respectivamente.
console.log(funcionario2.getSalario()); //Aqui estamos chamando o método 'getSalario' do objeto 'funcionario2', que irá calcular e retornar o salário total do funcionário, e em seguida exibir esse valor no console.

//Object.create
//Ela funciona criando um novo objeto, utilizando um objeto existente como protótipo do novo objeto criado. Isso permite que o novo objeto herde propriedades e métodos do objeto protótipo.
const pai = { nome: "Pedro", corCabelo: "preto" }; //Aqui estamos criando um objeto 'pai' com as chaves 'nome' e 'corCabelo', e atribuindo os valores 'Pedro' e 'preto' a essas chaves, respectivamente.
const filha1 = Object.create(pai);
filha1.nome = "Ana"; //Aqui estamos criando um novo objeto 'filha1' utilizando o método 'Object.create', passando o objeto 'pai' como argumento para que 'filha1' herde as propriedades de 'pai'. Em seguida, estamos atribuindo o valor 'Ana' à chave 'nome' do objeto 'filha1'.
