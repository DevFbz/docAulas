/*const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite um número:'));
let num2 = parseInt(prompt('Digite outro número:'));

console.log(`Resultado da Soma : ${num1 + num2}`); */


let varA = "A";
let varB = "B";
let varC = "C";

const varAantigo = varA

varA = varB;
varB = varC;
varC = varAantigo;

console.log(varA,varB,varC)


let umaString = "O rato roeu a roupa do rei de Roma"

console.log(umaString.replace(/r/g, '#'))
console.log(umaString.match(/Um/, 'Outra')) // Retorna um array com os valores encontrados (se g)

console.log(umaString.search(/Um/, 'Outra'))
console.log(umaString.length)

console.log(umaString.charAt(5)); // Retorna o valor da posição
console.log(umaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc
console.log(umaString.concat(' ', 'ei', ' ', 'sister')); // raramente usado
console.log(umaString.indexOf('e', 0)); // Retorna o índice
console.log(umaString.lastIndexOf('e', umaString.length)); // Retorna o índice

console.log(umaString.slice(2,6))
console.log(umaString.split(" ",2))
console.log(umaString.toLowerCase())
console.log(umaString.toUpperCase())