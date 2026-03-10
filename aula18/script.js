  /*form.onsubmit = function(evento){
        evento.preventDefault();
        console.log("Ola");
        alert(1);
    }*/

function main(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const clear = form.querySelectorAll('input')
    const pessoas = []


    form.addEventListener('submit', rodar=(evento)=>{
        evento.preventDefault();
       const nome = form.querySelector('.name');
       const sobrenome = form.querySelector('.snome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       pessoas.push({nome: nome.value,
        sobrenome:sobrenome.value,
        peso: peso.value,
        altura: altura.value,

       })
    
        
       console.log(pessoas);

       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
  
       clear.value = '';
    });
   

}
main();



