/* Entendendo Destructuring em JavaScript
 * Funciona basicamente como uma forma de extrair valores de arrays ou propridades de objetos
 * Pode ser útil para simplificar o código e tornar mais legível, em situações onde precisamos acessar múltiplos valores
 * Foi introduzido no ES6 (ECMAScript 2015)
 */

const pessoa = {
  nome: "Leonardo",
  idade: 19,
  endereco: {
    logradouro: "Vila Ema",
    numero: "5446",
  },
};

//Usando as chaves do objeto para acessar os valores, estou dizendo que quero extrair as propriedades nome e idade do objeto pessoa
const { nome, idade } = pessoa; // Destructuring de objeto
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // Posso também atribuir a variáveis com nomes diferentes
console.log(n, i);

const { sobrenome, bemHumorado = true } = pessoa; // Posso definir valores padrão caso a propriedade não exista no objeto
console.log(sobrenome, bemHumorado); // undefined true

const {
  endereco: { logradouro, numero, cep = "00000-000" },
} = pessoa; // Destructuring aninhado
console.log(logradouro, numero, cep); // Vila Ema 5446 00000-000

const {
  conta: { ag, num },
} = pessoa; // Tentando extrair propriedades de um objeto que não existe
console.log(ag, num); // Erro: Cannot destructure property 'ag' of 'undefined' as it is undefined
