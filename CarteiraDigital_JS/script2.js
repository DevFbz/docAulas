class CarteiraDigital {
  constructor(nome) {
    this.saldo = 0;
    this.nome = nome;
  }

  addSaldo(valor) {

    
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Saldo novo: R$ ${this.saldo}`);
    } else {
      console.log("Valor Inválido");
    }
  }

  sacar(valor) {

    if (valor > 0) {
      this.saldo -= valor;
      console.log(`Saldo com saque: R$ ${this.saldo}`);
    } else {
      console.log("Valor Inválido");
    }
  }

  verSaldo() {
    console.log(`${this.nome} seu saldo é ${this.saldo}`);
    return this.saldo;
  }
}

const cart1 = new CarteiraDigital("Jobson")
cart1.addSaldo(1050)
cart1.verSaldo()
cart1.sacar(10)
cart1.verSaldo()


