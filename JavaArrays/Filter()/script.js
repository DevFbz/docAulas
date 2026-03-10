// pop(), push(), shift(), unshift()
//slice(0,-1)
//splice(índice, delete, elem1, elem2, elem3)

//const a1 = [1,2,3];
//const a2 = [4,5,6];
//const a3 = a1.concat(a2,[7,8,9], 'Luiz')

//const a3 = [...a1,...a2]

//console.log(a3)

// -------------------------------------------------------------------

// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria',idade: 23},
    {nome: 'Eduardo',idade: 55},
    {nome:'Margarida',idade: 67},
    {nome: 'Rosana',idade: 32},
    {nome:'Wallace',idade:47}
]


//const pessoaNome = pessoas.filter(valor=>valor.nome.length >= 5)
//const pessoaIdade = pessoas.filter(valor=>valor.idade > 50)
const terminaComA = pessoas.filter((valor)=>valor.nome.toLowerCase().endsWith('a'))

console.log(terminaComA)
