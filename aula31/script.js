
function createSeconds(segundos){
    const data = new Date(segundos *1000)
    return data.toLocaleTimeString('pt-BR',{
       hour12: false,
       timeZone:'GMT'
    })
}
 const relogio = document.querySelector('.relogio')
 const iniciar = document.querySelector('.iniciar')
 const pausar = document.querySelector('.pausar')
 const zerar = document.querySelector('.zerar')
 let segundos = 0 
 let timer;

 function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = createSeconds(segundos)
    },1000)
 }




document.addEventListener('click',function(e){
    const element = e.target
    if(element.classList.contains('zerar')){

    }
    if(element.classList.contains('iniciar')){
        
    }
    if(element.classList.contains('pausar')){
        
    }
})




 iniciar.addEventListener('click',buttonIniciar = (e) =>{
    clearInterval(timer)
    e.preventDefault
    iniciarRelogio()
    relogio.classList.remove('pausado')
 })
 pausar.addEventListener('click',buttonPausar = (e)=>{
    e.preventDefault
    clearInterval(timer)
    relogio.classList.add('pausado')
 })
 zerar.addEventListener('click',buttonZerar = (e)=>{
    e.preventDefault
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
    relogio.classList.remove('pausado')
 })   

