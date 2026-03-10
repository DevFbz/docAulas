// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
  const sobrenome = "Miranda";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Luiz"));
  }

  falaNome();
  console.log("Olá,Mundo");
  console.log(idade, peso, altura);
})(23, 60, 1.7);

// Factory Function
// Construct Function
// ***** Quando uma função está dentro de um objeto é chamado de método *****

function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: function (assunto) {
      return `${this.nome} está ${assunto}`;
    },

    peso,
    altura,

    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Miranda", 89, 1.65);
console.log(p1.fala("Falando sobre JS"));
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
