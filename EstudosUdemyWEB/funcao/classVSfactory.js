//Classes VS. Factory Functions
//Ambas são usadas para criar objetos, mas têm abordagens diferentes
//Classes são moldes para criar objetos com propriedades e métodos pré-definidos, usando new e this
//Factory functions são funções que retornam objetos, permitindo mais flexibilidade na criação de objetos, usando apenas return

//Exemplo com Class
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`); //Usando o this podemos acessar as propriedades do objeto criado pela classe, se não usássemos o this, o JS não entenderia que nome é uma propriedade do objeto
  }
}

// Usando o new podemos criar uma nova instância da classe Pessoa
const p1 = new Pessoa("Leonardo");
p1.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`), //Aqui não usamos o this, pois o nome é uma variável do escopo da função criarPessoa
  };
};

const p2 = criarPessoa("Letícia");
p2.falar();
//Neste exemplo, tanto a classe quanto a factory function criam objetos com a capacidade de falar seu nome
//A escolha entre usar classes ou factory functions depende do contexto e das necessidades específicas do código
