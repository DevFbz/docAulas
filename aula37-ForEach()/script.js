const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let total = 0
numeros.forEach((valor,indice,array)=>{
    total += valor
    return total
})
console.log(total)
