let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global); // No Node.js, 'this' no escopo global não é igual a 'global'

const obj = {};
comparaComThis = comparaComThis.bind(obj); // Vinculando 'this' ao objeto 'obj'
comparaComThis(global); // Agora 'this' é igual a 'gloal'?
comparaComThis(obj); // 'this' é igual a 'obj'

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global); // 'this' em arrow function não é igual a 'global'
comparaComThisArrow(this); // 'this' em arrow function é igual ao 'this' do contexto léxico onde foi definida
comparaComThisArrow(module.exports); // 'this' em arrow function é igual ao 'this' do contexto léxico onde foi definida

comparaComThisArrow = comparaComThisArrow.bind(obj); // Tentando vincular 'this' ao objeto 'obj' em arrow function
comparaComThisArrow(obj); // 'this' em arrow function permanece o mesmo, não é afetado pelo 'bind'
comparaComThisArrow(module.exports); // 'this' em arrow function permanece o mesmo, não é afetado pelo 'bind'
