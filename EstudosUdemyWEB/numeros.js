const peso1 = 1.0;
const peso2 = Number("2.0"); //Number() converte string para número

const resultado = peso1 + peso2;
console.log(resultado); // Por mais que seja numero somado com uma string, o resultado é number

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // IsInteger verifica se o número é inteiro
console.log(Number.isInteger(peso2)); // É interessante usar quando queremos validar se o número é inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed(n) limita o número de casas decimais
console.log(media.toString()); // Converte o número para string
console.log(media.toString(2)); // Converte o número para string em binário
console.log(typeof media); // Tipo number
console.log(typeof Number); // Tipo function
console.log(media.toString(16)); // Converte o número para string em hexadecimal
