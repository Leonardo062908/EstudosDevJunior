function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000); // A função arrow mantém o contexto léxico de 'this', referenciando o objeto 'Pessoa'
}

new Pessoa(); // Cria uma nova instância de Pessoa e inicia o contador de idade

//Diferenças:
//Usando função tradicional com 'bind' ou 'self'
function Pessoa() {
  this.idade = 0;

  const self = this; // Armazenando a referência de 'this' em 'self', é uma técnica comum antes do ES6
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  ); // Usando 'bind' para garantir que 'this' se refira ao objeto 'Pessoa'
}

new Pessoa(); // Cria uma nova instância de Pessoa e inicia o contador de idade
