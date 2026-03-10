const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((valor) => valor * 2);
console.log(numerosDobrados);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Margarida", idade: 67 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nome = pessoas.map((obj) => obj.nome);
console.log(nome);
const idade = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idade);

const arrow = () => {
  let num = Math.floor(Math.random() * (99999 - 10000) + 10000);
  return num;
};

const id = pessoas.map((obj) => {
  const newObj = { ...obj };
  newObj[1]
  newObj.ID = arrow();

  return newObj;
});



console.log(id);
//console.log(pessoas)
