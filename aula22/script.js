const array1 = [340,304,454,4665]
const Array2 = [[34,454,565],[343,53,12],[3434,562,32]]



const [numero1, ...rest] = array1
const [indica1,indica2,indica3] = Array2
console.log(numero1,rest)
console.log(indica1[1])


const object = {nome: 'Marcos',sobrenome:'Paula',idade:12,endereco:{rua:'Rua Joaquim Silveira',
    numero: 32,
    complemento:'Portao Azul'
}}

const arrayObejct = [{nome: 'João',
    sobrenome:'Miranda'
}]

 const [nome] = arrayObejct

console.log(` ${nome}`)

