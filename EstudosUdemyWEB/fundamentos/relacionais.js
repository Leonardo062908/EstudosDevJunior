//Praticando operadores relacionais com JS
//Onde sempre retornam os resultados são de verdadeiro ou falso
console.log("01)", "1" == 1); //Igualdade frouxa, compara valor apenas
console.log("02)", "1" === 1); //Igualdade estrita, compara valor e tipo
console.log("03)", "3" != 3); //Desigualdade frouxa, compara valor apenas
console.log("04)", "3" !== 3); //Desigualdade estrita, compara valor e tipo

console.log("05)", 3 < 2); //Menor que
console.log("06)", 3 > 2); //Maior que
console.log("07)", 3 <= 2); //Menor ou igual a
console.log("08)", 3 >= 2); //Maior ou igual a

const d1 = new Date(0); //Data inicial do JS (01/01/1970)
const d2 = new Date(0); //Outra data inicial do JS (01/01/1970)
console.log("09)", d1 === d2); //Comparação de objetos (datas) com igualdade estrita, sempre retorna falso
console.log("10)", d1 == d2); //Comparação de objetos (datas) com igualdade frouxa, sempre retorna falso
console.log("11)", d1.getTime() === d2.getTime()); //Comparação dos valores numéricos das datas com igualdade estrita, retorna verdadeiro
console.log("12)", undefined == null); //Comparação de undefined com null usando igualdade frouxa, retorna verdadeiro
console.log("13)", undefined === null); //Comparação de undefined com null usando igualdade estrita, retorna falso
