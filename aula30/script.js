function getHora(){
    let data = new Date();

    return data.toLocaleDateString('pt-BR',{
        hour12:false
    })
}


const timer = setInterval(function(){
    console.log(getHora())
},1000);


setTimeout(function(){
    clearInterval(timer)
},3000);