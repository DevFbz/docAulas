
function visor(data){
    const visor = document.querySelector('.data')
    visor.innerHTML = data
}

function addZero(num){

if(num >= 10){
    return num
}else{
    return  `0${num}`
}

// return num >=10 ? num : `0${num}`

}

function getData(data){

const dia = addZero(data.getDate())
const mes = addZero(data.getMonth() +1)
/*const ano = addZero(data.getFullYear())
const hora = addZero(data.getHours())
const minutos = addZero(data.getMinutes())
const segundos = addZero(data.getSeconds())*/

    return `<p>${dia}/${mes}</p>`

}


const data = new Date();
const dataBrasil = getData(data)
visor(dataBrasil)