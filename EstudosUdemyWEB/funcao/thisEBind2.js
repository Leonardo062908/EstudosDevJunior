//Aprendendo mais sobre a função 'this' e o metodo 'bind'
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
