// const objA = {
//   chaveA: "A",
// };

// const objB = {
//   chaveB: "B",
// };

// const objC = {
//     chaveC: "C",
// }


// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// // console.log(objB.chaveA);
// console.log(objC.chaveA)



function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camiseta',50);
const p2 = {
    nome:'Caneca',
    preco: 20,
}


Object.setPrototypeOf(p2, Produto.prototype)
const p3 = Object.create(Produto.prototype)
// const p3 = Object.create(Produto.prototype,{
//     preco: {writable:true,
//         configurable: true,
//         enumerable:true,
//         value: 52
//     }
// });
p3.nome = 'Relogio'
p3.preco = 40
p3.aumento(60)
// p1.desconto(100)
p1.aumento(100)
p2.aumento(50)
console.log(p1);
console.log(p2);
console.log(p3);