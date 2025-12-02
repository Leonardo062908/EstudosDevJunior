//Aprendendo com condicionais 'if-else' em JavaScript
function teste1(num) {
  if (num > 7) console.log(num);
  console.log("Final");
}

teste1(6); //Exibe 'Final', pois 6 não é maior que 7
teste1(8); //Exibe '8' e 'Final', pois 8 é maior que 7
//Em javaScript, a ausência de chaves em um bloco 'if' faz com que apenas a primeira linha subsequente seja considerada parte do bloco condicional.
