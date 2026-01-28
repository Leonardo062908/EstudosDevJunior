//Aprendendo sobre funções construtoras, usando como exemplo a função Carro

function Carro(velocidadeMaxima = 200, delta = 5) {
  //Atributo privado
  let velocidadeAtual = 0;

  //Método público
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //Método público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 70);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar(); // Não deve ultrapassar a velocidade máxima, retorna 350
console.log(ferrari.getVelocidadeAtual());
