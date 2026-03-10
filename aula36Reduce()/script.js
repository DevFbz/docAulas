// Reduce()

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*const total = numeros.reduce((acumulado,valor) =>{
    acumulado += valor
   console.log(acumulado,valor) 
   return acumulado
},0) */

/*const total = numeros.reduce((acumulado,valor) =>{
    if(valor % 2 == 0){
        acumulado.push(valor)
    }
    return acumulado
},[]) */

/*const total = numeros.reduce((acumulado, valor) => {
  acumulado.push(valor * 2);

  return acumulado;
},[]);

console.log(total);*/

/*

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 73 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Margarida", idade: 67 },
    { nome: "Rosana", idade: 92 },
    { nome: "Wallace", idade: 47 },
  ];

  const idadeMaior = pessoas.reduce((acumulador,valor)=>{
 if(acumulador.idade > valor.idade) return acumulador
 return valor
 
  })
  console.log(idadeMaior)
*/

// Retorne a soma do dobro de todos os pares


const numerosPares = numeros
.filter(valor=>valor % 2 == 0)
.map(valor=> valor * 2)
.reduce((ac,valor)=> ac + valor)

console.log(numerosPares)