//Como funcionam Heranças em JavaScript
//Basicamente uma herança é quando um objeto herda as propriedades e métodos de outro objeto. Em JS, isso é feito através do protótipo.
//Cada objeto tem uma propriedade interna chamada [[Prototype]], que é uma referência para outro objeto. Quando tentamos acessar uma propriedade ou método de um objeto, o JavaScript primeiro verifica se essa propriedade ou método existe no próprio objeto. Se não existir, ele procura na cadeia de protótipos, seguindo a referência do [[Prototype]] até encontrar a propriedade ou método desejado ou chegar ao final da cadeia (quando o [[Prototype]] é null).
//Isso permite que objetos compartilhem propriedades e métodos, promovendo a reutilização de código e a criação de hierarquias de objetos. Por exemplo, podemos criar um objeto "Animal" com propriedades e métodos comuns a todos os animais, e depois criar objetos específicos como "Cachorro" ou "Gato" que herdam do objeto "Animal" e adicionam suas próprias características.

//Exemplo de herança em JavaScript
const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

const bmw = {
  modelo: "M4   ",
  velMax: 250,
};

console.log(bmw.__proto__); //Retorna o protótipo do objeto bmw, que é o objeto Object.prototype, pois bmw é um objeto literal criado diretamente a partir de Object.
//Ele procura em toda a cadeia de protótipos, mas não encontra a propriedade "toString" em nenhum dos objetos, então retorna undefined. No entanto, se tentarmos acessar uma propriedade ou método que existe no protótipo Object.prototype, como "toString", ele encontrará essa propriedade e a retornará.

console.log(ferrari.__proto__ === Object.prototype); //true - O protótipo do objeto ferrari é o objeto Object.prototype, pois ferrari é um objeto literal criado diretamente a partir de Object.
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); //true - O protótipo do objeto Object.prototype é null, pois Object.prototype é o topo da cadeia de protótipos em JavaScript. Ele não tem um protótipo acima dele, então seu [[Prototype]] é null.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); //function function - Tanto Object quanto MeuObjeto são funções em JavaScript, pois são construtores de objetos. Object é a função construtora nativa para criar objetos, enquanto MeuObjeto é uma função construtora personalizada que podemos usar para criar nossos próprios objetos.
console.log(Object.prototype, MeuObjeto.prototype); //Object.prototype {} - O protótipo do objeto Object é um objeto vazio, enquanto o protótipo do objeto MeuObjeto é um objeto vazio criado automaticamente quando definimos a função construtora MeuObjeto. Ambos os protótipos são objetos vazios, mas são distintos um do outro.
