function Conta(agencia, conta, saldo, nome) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
  this.nome = nome;
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo Insuficinte: R$${this.saldo}`);
    console.log("Vamos te dar um empréstimo");
    
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Cliente: ${this.nome} | ` +
      `Ag/C: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

const conta1 = new Conta(13424, 12, 430, "Maycon Silveira Mendes");
const conta2 = new Conta(14524, 312, 200000, "José Alvaro Guedes");
// conta1.depositar(100);

conta2.verSaldo();
conta1.verSaldo();

function ContaCorrente(agencia, conta, saldo, limite, nome) {
  Conta.call(this, agencia, conta, saldo, nome);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log(`Saldo Insuficinte: R$${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(
  11,
  13,
  100,
  500,
  "João Francisco Barcellos Cintra"
);

cc.sacar(250);

function ContaPoupança(agencia, conta, saldo, limite, nome, emprestimo) {
  Conta.call(this, agencia, conta, saldo, nome);
  this.emprestimo = emprestimo;
  this.limite = limite;
}

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

ContaPoupança.prototype.emprestimo = function (valor) {
  if (this.saldo <= 0) {
    this.saldo += this.emprestimo;
    console.log(`Saldo Emprestimo: R$${this.saldo}`);

    this.saldo -= valor;
    this.verSaldo();
    return;
  }

  this.verSaldo();
};

const cp = new ContaPoupança(14, 78, 100, 4, "Miguel Barcellos Cintra", 2000);
cp.depositar(400)
cp.sacar(620)

