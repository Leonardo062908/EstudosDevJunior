//Como funcionam getters e setters em JavaScript
//Basicamente, getters e setters são métodos especiais que permitem acessar e modificar as propriedades de um objeto de forma controlada. Eles são usados para encapsular a lógica de acesso e modificação de propriedades, permitindo que você execute código adicional quando uma propriedade é acessada ou modificada.
const sequencia = {
  _valor: 1, //Usar underline, mostra que estamos convencionando que essa propriedade é privada, ou seja, não deve ser acessada diretamente fora do objeto. Apenas internamente dentro do objeto.
  get valor() {
    //O método getter é definido usando a palavra-chave "get" seguida do nome da propriedade que queremos acessar. Ele retorna o valor da propriedade "_valor".
    return this._valor++;
  },
  set valor(valor) {
    //O método setter é definido usando a palavra-chave "set" seguida do nome da propriedade que queremos modificar. Ele recebe um parâmetro "valor" e atribui esse valor à propriedade "_valor".
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor); //1
console.log(sequencia.valor); //2
console.log(sequencia.valor); //3
