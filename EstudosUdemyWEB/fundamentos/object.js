/*
 * Aprendendo e criando objetos em JavaScript
 * Criando um objeto literal com propriedades e valores
 * JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever para humanos, e fácil de analisar e gerar para máquinas
 * Um objeto javaScript não é a mesma coisa que JSON, mas JSON (formato textual) é baseado na sintaxe de objetos JavaScript
 */
// Um objeto em JS é uma coleção de pares chave/valor

const prod1 = {}; // Declaração de um objeto vazio
prod1.nome = "Celular Samsung S24"; // Adiciona a propriedade 'nome' ao objeto prod1
prod1.preco = 2899.99; // Adiciona a propriedade 'preco' ao objeto prod1
prod1["Desconto Legal"] = 0.4; // Adiciona a propriedade 'Desconto Legal' ao objeto prod1 usando notação de colchetes, mas não é recomendado atributos com espaços

console.log(prod1);

const prod2 = {
  nome: "Camiseta Slim Fit",
  preco: 79.9,
  tamanho: "M",
  cor: "Azul Marinho",
}; // Declaração de um objeto com várias propriedades

console.log(prod2); // Um objeto nada mais é uma coleção de chave/valor, onde cada chave é uma string (nome da propriedade) e o valor pode ser de qualquer tipo de dado, incluindo outros objetos ou funções

const prod3 = {
  nome: "Notebook Dell XPS 13",
  preco: 9999.99,
  especificacoes: {
    processador: "Intel Core i7",
    memoria: "16GB",
  },
};
console.log(prod3); // Exibe o objeto prod3, que contém outro objeto (especificacoes) como uma de suas propriedades

// Lembrando que JSON é um contexto textual, usado para troca de dados, e não um objeto JavaScript diretamente. Porém, a sintaxe JSON é muito semelhante à sintaxe de objetos JavaScript
// Onde a maior diferença é que em JSON, as chaves (nomes das propriedades) devem ser strings entre aspas duplas, e os valores podem ser strings, números, arrays, objetos, booleanos ou null. Já em objetos JavaScript, as chaves podem ser escritas sem aspas se forem identificadores válidos.
