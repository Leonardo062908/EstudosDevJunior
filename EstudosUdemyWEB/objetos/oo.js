//Como funciona a orientação a objetos em JavaScript
//Em JavaScript, a orientação a objetos é baseada em protótipos, o que significa que os objetos podem herdar propriedades e métodos de outros objetos.
//Go to vs linguagens procedurais e orientadas a objetos -> um código procedural é aquele que é escrito em uma sequência de instruções, enquanto um código orientado a objetos é organizado em torno de objetos e suas interações.
//Exemplo de código procedural
processamento(valor1, valor2, valor3);

//OO
objeto = {
  valor1,
  valor2,
  valor3,
  processamento: function () {
    // código de processamento aqui, funciona como um método do objeto, ou seja, uma função associada a um objeto.
  },
};

objeto.processamento();
//Principios importantes da orientação a objetos"
//1. Abstração: é a capacidade de representar conceitos complexos de forma simplificada, ocultando detalhes desnecessários e destacando as características essenciais de um objeto ou sistema.
//2. Encapsulamento: é a prática de ocultar os detalhes internos de um objeto e fornecer uma interface pública para interagir com ele. Isso ajuda a proteger os dados e a garantir que o objeto seja usado corretamente.
//3. Herança (prototypes): é a capacidade de criar novos objetos com base em objetos existentes, permitindo que eles herdem propriedades e métodos. Em JavaScript, isso é feito por meio de protótipos.
//4. Polimorfismo: é a capacidade de um objeto assumir muitas formas, permitindo que diferentes objetos sejam tratados de maneira uniforme, mesmo que tenham comportamentos diferentes. Em JavaScript, isso pode ser alcançado por meio de métodos que podem ser sobrescritos em objetos filhos.
