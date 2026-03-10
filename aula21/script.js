/*const data = new Date();
const diaSemana = data.getDay();


function getSemana(diaSemana){
    let diaT  
    switch (diaSemana) {
        case 0:
      diaT = "Domingo"
      return diaT
        case 1:
          diaT = "Segunda"
          return diaT
          
        case 2:
          diaT = "Terça-feira"
          return diaT
        case 3:
          
        diaT = "Quarta-feria"
        return diaT
        case 4:
            diaT = "Quinta"
            return diaT
        case 5:
            diaT = "Sexta"
            return diaT
        case 6:
            diaT = "Sabádo"
            return diaT
        default:
            break
      }
      
}

const exibirSemana = getSemana(diaSemana)

console.log(diaSemana, exibirSemana)*/
/*
const data = new Date();
const h1 = document.querySelector('.container h1');



function getMesTexto(mes){
    let mesTexto  
    switch (mes) {
        case 0:
            mesTexto = "Janeiro"
      return mesTexto
        case 1:
            mesTexto = "Fevereiro"
          return mesTexto
          
        case 2:
            mesTexto = "Março"
          return mesTexto
        case 3:
          
        mesTexto = "Abril"
        return mesTexto
        case 4:
            mesTexto = "Maio"
            return mesTexto
        case 5:
            mesTexto = "Junho"
            return mesTexto
        case 6:
            mesTexto = "Julho"
            return mesTexto
        default:
            break
      }
      
}

function getSemana(diaSemanaTexto){
    let diaT;
    switch (diaSemanaTexto) {
        case 0:
      diaT = "Domingo"
      return diaT
        case 1:
          diaT = "Segunda"
          return diaT
          
        case 2:
          diaT = "Terça-feira"
          return diaT
        case 3:
          
        diaT = "Quarta-feria"
        return diaT
        case 4:
            diaT = "Quinta"
            return diaT
        case 5:
            diaT = "Sexta"
            return diaT
        case 6:
            diaT = "Sabádo"
            return diaT
        default:
            break
      }
      
}


function criadata(data){
    
    const diaSemanaTexto = data.getDay();
   const dia = data.getDate();
   const ano = data.getFullYear();
    const mes = data.getMonth();
    const hora = data.getHours()
    const minutes = data.getMinutes()

    const nomeDia = getSemana(diaSemanaTexto)
    const mesTexto = getMesTexto(mes)
 return `${nomeDia}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minutes}`
}


h1.innerHTML = criadata(data) 

const h1 = document.querySelector('.container h1');
const data = new Date();
let options = { year: 'numeric',
  month: ('long' || 'short' || 'numeric'),
  weekday: ('long' || 'short'),
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  era: ('long' || 'short'),
  timeZoneName: ('long' || 'short'),
  dateStyle: ('long'), 
  timeStyle: ('long'), 
}


h1.innerHTML = data.toLocaleDateString('pt-br', options)*/

const data = new Date();


function getSemanaTexto (numSemana){
  let semanaTexto = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta"]
  return semanaTexto[numSemana]
}

function getMesTexto(numMes){
  let mesTexto = ["Janeiro","Fevereiro","Março","Abril","Maio"]
  return mesTexto[numMes]
}

function exibirFormato(data){
 const numMes = data.getMonth()
 const numSemana = data.getDay()

 const textoSemana = getSemanaTexto(numSemana)
 const textoMes = getMesTexto(numMes)

console.log(textoMes,textoSemana)
}

exibirFormato(data)