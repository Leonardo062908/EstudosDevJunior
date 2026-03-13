const a = 1;
const b = 2;
const c = 3;

//Antes da versão ES6, para criar um objeto com as chaves 'a', 'b' e 'c' e os valores correspondentes, teríamos que fazer algo assim:
const obj1 = { a: a, b: b, c: c }; //Traduzindo: a constante a, b constante b e c constante c, estão sendo atribuídas às chaves 'a', 'b' e 'c' do objeto 'obj1', respectivamente. Ou seja, estamos criando um objeto 'obj1' com as chaves 'a', 'b' e 'c', e os valores correspondentes são os valores das constantes 'a', 'b' e 'c'.

//Agora podemos usar a notação literal de objetos para criar um objeto de forma mais concisa, sem precisar repetir os nomes das chaves e dos valores:
const obj2 = { a, b, c }; //Aqui estamos criando um objeto 'obj2' usando a notação literal de objetos, onde as chaves 'a', 'b' e 'c' são automaticamente associadas aos valores das constantes 'a', 'b' e 'c', respectivamente. Ou seja, estamos criando um objeto 'obj2' com as chaves 'a', 'b' e 'c', e os valores correspondentes são os valores das constantes 'a', 'b' e 'c'.

//LEMBRANDO: para criar um objeto, deve estar dentro de chaves '{}', e as chaves do objeto devem ser seguidas por dois pontos ':' e os valores correspondentes, separados por vírgulas ','.
console.log(obj1); //Aqui irá exibir o objeto 'obj1' no console, que terá as chaves 'a', 'b' e 'c' com os valores correspondentes das constantes 'a', 'b' e 'c'.
console.log(obj2); //Aqui irá exibir o objeto 'obj2' no console, que terá as chaves 'a', 'b' e 'c' com os valores correspondentes das constantes 'a', 'b' e 'c', assim como o objeto 'obj1', mas de forma mais concisa usando a notação literal de objetos.

//Criando dinanicamente as chaves do objeto
const nomeAttr = "nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr; //Aqui estamos criando um objeto 'obj3' vazio e, em seguida, usando a notação de colchetes '[]' para criar dinamicamente uma chave no objeto 'obj3' com o nome armazenado na variável 'nomeAttr' (que é 'nota') e atribuindo a ela o valor armazenado na variável 'valorAttr' (que é 7.87). Ou seja, estamos criando uma chave 'nota' no objeto 'obj3' e atribuindo a ela o valor 7.87.
console.log(obj3); //Aqui irá exibir o objeto 'obj3' no console, que terá a chave 'nota' com o valor 7.87, criado dinamicamente usando a notação de colchetes '[]' para atribuir a chave e o valor ao objeto 'obj3'.

const obj4 = { [nomeAttr]: valorAttr }; //Aqui estamos criando um objeto 'obj4' usando a notação literal de objetos, onde a chave é criada dinamicamente usando a sintaxe de colchetes '[]' e o valor é atribuído a essa chave. Ou seja, estamos criando uma chave 'nota' no objeto 'obj4' e atribuindo a ela o valor 7.87, de forma mais concisa usando a notação literal de objetos.
console.log(obj4); //Aqui irá exibir o objeto 'obj4' no console, que terá a chave 'nota' com o valor 7.87, criado dinamicamente usando a notação literal de objetos e a sintaxe de colchetes '[]' para atribuir a chave e o valor ao objeto 'obj4'.

//Como definir funções dentro de objetos usando a notação literal de objetos
const obj5 = {
  funcao1: function () {
    console.log("Função 1");
  },
};

//Método após o ES6, onde podemos omitir a palavra 'function' e os dois pontos ':' ao definir uma função dentro de um objeto usando a notação literal de objetos.
const obj6 = {
  funcao1() {
    console.log("Função 1");
  },
};
