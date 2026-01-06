//Aprendendo sobre a função 'this' e o metodo 'bind'
//O valor de 'this' em JavaScript depende do contexto em que a funcao é chamada
//Em funcoes normais, 'this' refere-se ao objeto global (window no navegador, global no Node.js)
//Em metodos de objetos, 'this' refere-se ao objeto que chamou o metodo
//Em arrow functions, 'this' é léxico, ou seja, herda o valor de 'this' do contexto onde foi definida
//Ja o metodo 'bind' cria uma nova funcao que, quando chamada, tem seu 'this' definido para o valor passado como argumento
const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar(); // Espera "Bom dia!"
const falar = pessoa.falar;
falar(); // Espera undefined, pois 'this' nao aponta para 'pessoa', conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Espera "Bom dia!", pois 'this' foi vinculado a 'pessoa' usando 'bind'

const falarDePessoa2 = pessoa.falar.bind({ saudacao: "Ou boa tarde!" });
falarDePessoa2(); // Espera "Ou boa tarde!", pois 'this' foi vinculado a um novo objeto usando 'bind'
