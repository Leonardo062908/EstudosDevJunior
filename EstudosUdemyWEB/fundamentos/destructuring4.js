//Aprendendo sobre destructuring e outros conceitos em JavaScript
function rand([min = 0, max = 1000]) {
  //Destruturou o array passado como argumento, atribuindo valores padrão de 0 e 1000 para min e max, respectivamente
  if (min > max) [min, max] = [max, min]; //Condição que troca os valores de min e max se min for maior que max
  const valor = Math.random() * (max - min) + min; //Gera um número aleatório entre min e max
  return Math.floor(valor); //Retorna o valor arredondado para baixo
}

console.log(rand([50, 40]));
console.log(rand([992])); //Aqui, max assume o valor padrão de 1000
console.log(rand([, 10])); //Aqui, min assume o valor padrão de 0
console.log(rand([])); //Aqui, tanto min quanto max assumem seus valores padrão
console.log(rand()); //Erro, pois está tentando desestruturar algo que é undefined
