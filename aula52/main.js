class Pessoa{
    constructor(nome,sobrenome,idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade
    }

    falar(){
console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Carlos')
p1.falar()
