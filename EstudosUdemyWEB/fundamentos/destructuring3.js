//Criando função com destructuring em objetos e substituindo por um array
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min; //Gera um número aleatório entre o valor mínimo e máximo
  return Math.floor(valor); //Retorna o valor arredondado para baixo
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); //Chama a função passando o objeto como argumento
console.log(rand({ min: 955 })); //Chama a função passando um objeto literal como argumento
console.log(rand({})); //Chama a função passando um objeto vazio como argumento
console.log(rand()); //Gera um erro, pois está tentando desestruturar algo que é undefined
