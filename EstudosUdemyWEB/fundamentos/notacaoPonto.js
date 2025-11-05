//Uma notação ponto é usada para acessar propriedades e métodos de objetos em JavaScript
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Bola";
// obj1['nome'] = 'Bola2'
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  this.exec = function () {
    console.log("Exec...");
  };
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
//Aqui estamos criando uma função construtora Obj que define uma propriedade nome e um método exec. Em seguida, criamos dois objetos obj2 e obj3 usando a palavra-chave new, que invoca a função construtora e cria novos objetos com suas próprias propriedades e métodos.
