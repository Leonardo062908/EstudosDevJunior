//Cadeia de protótipos (prototype chain)
//Funciona como uma hierarquia de objetos, onde cada objeto tem seu próprio protótipo, que pode ter seu próprio protótipo, e assim por diante. Quando tentamos acessar uma propriedade ou método de um objeto, o JavaScript procura primeiro no próprio objeto. Se não encontrar, ele procura no protótipo do objeto, e se ainda não encontrar, ele continua subindo na cadeia de protótipos até chegar ao topo (Object.prototype) ou encontrar a propriedade/método desejado.
//Isso permite que objetos compartilhem propriedades e métodos, promovendo a reutilização de código e a criação de hierarquias de objetos. Por exemplo, podemos criar um objeto "Animal" com propriedades e métodos comuns a todos os animais, e depois criar objetos específicos como "Cachorro" ou "Gato" que herdam do objeto "Animal" e adicionam suas próprias características.
//Exemplo de cadeia de protótipos em JavaScript
const avo = { attr1: "A" }; //O avo terá como protótipo o Object.prototype, que é o protótipo padrão para objetos literais em JavaScript. O avo tem a propriedade attr1 com o valor "A".
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };
console.log(filho.attr2); //A - O objeto filho não tem a propriedade attr1, então o JavaScript procura no protótipo pai, que também não tem a propriedade attr1, e finalmente encontra a propriedade attr1 no protótipo avo, retornando o valor "A".
Object.prototype.attr0 = "Z"; //Adicionando a propriedade attr0 ao protótipo Object.prototype, que é o protótipo padrão para todos os objetos em JavaScript. Isso significa que todos os objetos terão acesso à propriedade attr0, a menos que ela seja sobrescrita por um objeto específico.
console.log(filho.attr0); //Z - O objeto filho não tem a propriedade attr0, então o JavaScript procura no protótipo pai, que também não tem a propriedade attr0, e finalmente encontra a propriedade attr0 no protótipo Object.prototype, retornando o valor "Z".

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.carro} ${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const dodge = {
  modelo: "challenger hellcat",
  velMax: 324, //shadowing - A propriedade velMax do objeto ferrari "sombreia" a propriedade velMax do objeto carro. Quando acessamos ferrari.velMax, o JavaScript encontra a propriedade velMax no próprio objeto ferrari e retorna o valor 324, em vez de procurar no protótipo carro.
};

const bmw = {
  modelo: "M4",
  status() {
    return `${this.modelo}: ${super.status()}`; //super - A palavra-chave super é usada para acessar métodos do protótipo pai. No método status do objeto bmw, usamos super.status() para chamar o método status do protótipo carro, permitindo que o método status do bmw retorne uma string que inclui o modelo do carro e a velocidade atual em relação à velocidade máxima.
  },
};

//Exemplo prático de herança usando Object.create

const dodge2 = Object.create(carro); //Criando um novo objeto dodge2 que tem como protótipo o objeto carro. Isso significa que dodge2 herda todas as propriedades e métodos do objeto carro.
dodge2.modelo = "challenger hellcat"; //Adicionando a propriedade modelo ao objeto dodge2, que é específico para esse objeto e não afeta o protótipo carro.
dodge2.velMax = 324; //Adicionando a propriedade velMax ao objeto dodge2, que "sombreia" a propriedade velMax do protótipo carro. Quando acessamos dodge2.velMax, o JavaScript encontra a propriedade velMax no próprio objeto dodge2 e retorna o valor 324, em vez de procurar no protótipo carro.
dodge2.carro = "Challenger"; //Adicionando a propriedade carro ao objeto dodge2, que é específica para esse objeto e não afeta o protótipo carro.
console.log(dodge2.status()); //0Km/h de 324Km/h - O método status do objeto dodge2 é chamado, e como dodge2 herda do protótipo carro, ele tem acesso ao método status. O método status retorna a string "0Km/h de 324Km/h", indicando que a velocidade atual é 0 e a velocidade máxima é 324, que é o valor da propriedade velMax do objeto dodge2.

Object.setPrototypeOf(dodge, carro); //O setPrototypeOf é usado para definir o protótipo de um objeto. Neste caso, estamos definindo o protótipo do objeto dodge como o objeto carro, permitindo que dodge herde as propriedades e métodos de carro
Object.setPrototypeOf(bmw, carro);

console.log(dodge);

bmw.acelerarMais(100);
console.log(bmw.status());
