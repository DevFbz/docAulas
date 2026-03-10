//     Exercícios     //

/* function retornarMaior(x,y){

return x>y?x:y;

if(x > y){
    return x
}else{
    return y
}
 }

 const retornar = retornarMaior(55,105)
 console.log(retornar)

 function ePaisagem(largura,altura){

if (largura > altura ){
return true
 }else{
    return false
 }
}


const ePaisagem = (largura,altura) => largura > altura
console.log(ePaisagem(100005,55050))*/

function fizzBuzz(numero){

    if( typeof numero != 'number'){
        return numero
    }
    if ( numero % 3 == 0 && numero % 5 == 0 ){
        return "FizzBuzz"
    }else if(numero % 5 == 0){
        return "Buzz"
    }else if(numero % 3 == 0 ){
        return "Buzz"
    }else if(numero % 3 == 1 && numero % 5 == 1){
        return numero
    }else{
        return numero
    }

}

//const numeroRandom = Math.floor(Math.random() * (100-1) + 1)
console.log('a', fizzBuzz('a'))
for( let i=0; i<=100; i++){
    console.log(i, fizzBuzz(i))
}

//console.log(fizzBuzz(numeroRandom), numeroRandom)