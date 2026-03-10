//              const pessoa = {
//
//             } 


//or    


const pessoa1 = new Object();

pessoa1.nome = 'Miguel'
pessoa1.falarNome = function(){
return (`${this.nome} esta falando seu nome.`)
}


console.log(pessoa1.falarNome())
