const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;

const peso = 85;
const alturaEmM = 1.80;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)}\n${nome} nasceu em ${anoNascimento}`)