//Constantes são imutáveis, ou seja, uma vez que um valor é atribuído a uma constante, ele não pode ser alterado. No entanto, isso não significa que o valor da constante seja completamente imutável. Se a constante for um objeto ou um array, por exemplo, as propriedades ou elementos internos podem ser modificados, mas a referência à constante em si não pode ser reatribuída a um novo valor.
//Para uma constante que é um objeto, podemos modificar suas propriedades, mas não podemos reatribuir a constante para apontar para um novo objeto. Por exemplo:
const pessoa = { nome: "João", idade: 30 };
const pessoa2 = pessoa; //Aqui estamos atribuindo a constante 'pessoa2' para apontar para o mesmo objeto que 'pessoa', ou seja, ambos 'pessoa' e 'pessoa2' referenciam o mesmo objeto na memória.
pessoa.nome = "Maria";
console.log(pessoa.nome); //Aqui estamos acessando a chave 'nome' do objeto referenciado por 'pessoa' e exibindo seu valor no console, que será 'Maria', pois modificamos a propriedade 'nome' do objeto.
console.log(pessoa2.nome); //Aqui estamos acessando a chave 'nome' do objeto referenciado por 'pessoa2' e exibindo seu valor no console, que também será 'Maria', pois 'pessoa2' referencia o mesmo objeto que 'pessoa', e as modificações feitas em 'pessoa' afetam o mesmo objeto referenciado por 'pessoa2'.

Object.freeze(pessoa); //Aqui estamos usando o método 'Object.freeze' para congelar o objeto referenciado por 'pessoa', o que significa que suas propriedades não podem ser modificadas, adicionadas ou removidas.
pessoa.nome = "Carlos"; //Aqui estamos tentando modificar a propriedade 'nome' do objeto referenciado por 'pessoa', mas como o objeto foi congelado com 'Object.freeze', essa modificação não terá efeito.
console.log(pessoa.nome); //Aqui estamos acessando a chave 'nome' do objeto referenciado por 'pessoa' e exibindo seu valor no console, que ainda será 'Maria', pois a modificação para 'Carlos' não teve efeito devido ao congelamento do objeto.

//O freeze é uma forma de tornar um objeto imutável, ou seja, impedir que suas propriedades sejam modificadas, adicionadas ou removidas. No entanto, o freeze não torna o objeto completamente imutável, pois ele ainda pode ser modificado por meio de referências a objetos internos. Por exemplo:
//Freeze não é tão utilizado em ambientes de desenvolvimento, mas pode ser útil em situações onde é necessário garantir que um objeto não seja modificado acidentalmente, como em bibliotecas ou APIs públicas. No entanto, é importante lembrar que o freeze não é uma solução completa para a imutabilidade, e outras técnicas, como a criação de objetos imutáveis ou o uso de bibliotecas de imutabilidade, podem ser mais adequadas dependendo do caso.
