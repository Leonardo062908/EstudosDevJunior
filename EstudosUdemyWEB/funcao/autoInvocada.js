// Como funciona uma função auto-invocada?
// Uma função auto-invocada é uma função que é definida e executada imediatamente após sua criação. Ela é envolvida por parênteses para criar um escopo local e evitar conflitos com outras variáveis no escopo global. A sintaxe básica de uma função auto-invocada é a seguinte:
//IIFE - Immediately Invoked Function Expression

(function () {
  console.log("Esta função é auto-invocada!");
  console.log("Foge do escopo global e evita conflitos de variáveis.");
})(); // Os parênteses no final são responsáveis por invocar a função imediatamente após sua definição.

//Vantagens de usar uma função auto-invocada:
// 1. Evita poluição do escopo global: As variáveis e funções definidas dentro da função auto-invocada não ficam acessíveis fora dela, o que ajuda a evitar conflitos com outras partes do código.
// 2. Permite criar um escopo privado: As variáveis e funções definidas dentro da função auto-invocada são privadas e não podem ser acessadas de fora, o que é útil para encapsular lógica e proteger dados.
// 3. Pode ser usada para inicializar código: As funções auto-invocadas são frequentemente usadas para executar código de inicialização ou configuração quando a página é carregada, sem a necessidade de chamar a função explicitamente.
