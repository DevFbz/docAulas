// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   falar() {
//     console.log(`${this.nome} está falando`);
//   }
//   comer() {
//     console.log(`${this.nome} está comendo`);
//   }

//   beber() {
//     console.log(`${this.nome} está bebendo`);
//   }
// }

// const p1 = new Pessoa('Miguel')

// p1.falar()

const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 100;
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this.velocidade >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this.velocidade < 0) return;
    this.velocidade--;
  }
}

const c1 = new Carro("Fusca");
c1.velocidade = 50
for(let i = 0 ; i <= 50; i++){
    c1.acelerar()
    console.log(c1.velocidade)
}



// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
//   get nomeCompleto() {
//     return console.log(this.nome + " " + this.sobrenome);
//   }

//   set nomeCompleto(valor){
//     valor = valor.split(' ')
//     this.nome = valor.shift()
//     this.sobrenome = valor.join(' ')
//   }
// }

// const p1 = new Pessoa('Marcelo','Jadson Gilbert')
// p1.nomeCompleto = 'Marcelo Miranda Cristofer'
// p1.nomeCompleto