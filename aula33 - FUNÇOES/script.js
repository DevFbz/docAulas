// Declaração de função (Function Hoisting)

falaOi();
function falaOi(){
    console.log("Oie")
}

//Firt-class objects (Objetos de primeira classe)
// Function Expression

const souUmDado = function(){
    console.log("Sou um dado.")
};
souUmDado();

//Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow Function")
}
funcaoArrow();

const object = {

    falar(){
        console.log("Estou falando...")
    }
}
object.falar()

const object2 = {
    
    falar: function(){
        console.log("Estou falando...")
    }
}
object.falar()

// argumentos que sustenta todos os argumentos(parametros) enviados
// ...rest
function funcao(){
    let total = 0

    for(let argumento of arguments){
        total += argumento
    }
    console.log(total)
}
funcao(1,2,3,4,5,7,2,1)



function conta(operador,acumulador,...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
        if(operador === '-') acumulador -= numero
    }
    console.log(acumulador)
}

conta('+',0,20,30,40,50,10)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco +' '+ resto
    }
    return falaResto
}

const OlaMundo = falaFrase('Olá')
console.log(OlaMundo('Mundo'))

function criarMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = criarMultiplicador(2)
const triplica = criarMultiplicador(3)
const quadriplica = criarMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

 
function random(min=1000,max=3000){
    const num = Math.floor(Math.random()* (max-min)+min)
    return num
}

function f1(callback){
    setTimeout(function(){
console.log("f1");
if(callback)callback()
    },random())
}

function f2(callback){
    setTimeout(function(){
console.log("f2");
if(callback)callback()
    },random())
}

function f3(callback){
    setTimeout(function(){
console.log("f3");
if(callback)callback()
    
    },random())
}

f1(f1Call)

function f1Call(){
    f2(f2Call)
}

function f2Call(){
    f3(f3Call)
}
function f3Call(){
    console.log('Olá,Mundo')
}

