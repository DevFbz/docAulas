class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    this.ligado ? console.log(this.nome + " ja ligado!") : (this.ligado = true);
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " ja desligado!");
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class SistemaPhone extends Smartphone {
  constructor(nome, cor, modelo, sistema) {
    super(nome, cor, modelo);
    this.sistema = sistema;
  }
}

const phone = new SistemaPhone("Iphone", "Azul", "12 Pro Max", "IOS");

phone.ligar();
phone.ligar();
console.log(phone);
 