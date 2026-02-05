//Desafio para escrever o código abaixo usando função construtora:
// Usando o new podemos criar uma nova instância da classe Pessoa
const p1 = new Pessoa("Leonardo");
p1.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`), //Aqui não usamos o this, pois o nome é uma variável do escopo da função criarPessoa
  };
};

//Minha solução:
function Pessoa(nome) {
  this.nome = nome; //Aqui usamos o this para definir a propriedade nome do objeto que será criado
  this.falar = function () {
    //Definimos o método falar para o objetom e passando uma função anônima
    console.log(`Meu nome é ${this.nome}`); //Aqui podemos fazer a referência ao this para acessar a propriedade nome do objeto
  };
}

//Teste da solução
const p2 = new Pessoa("Letícia");
p2.falar();
//Agora com a função construtora Pessoa, podemos criar novos objetos do tipo Pessoa usando o new
