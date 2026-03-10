// FUNÇÃO CONSTRUTORA
function Calculadora(){
  this.display = document.querySelector(".display");

  this.main = () => {
    this.cliques();
    this.cliqueEnter();
  };


this.cliqueEnter = ()=>{
  document.addEventListener('keypress',(e)=>{
    if(e.keyCode !== 13)return;
      this.calcular();
    
  })
}


  this.cliques = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        this.exibirDisplay(el.innerText);
      }

      if (e.target.classList.contains("btn-clear")) {
        this.limpaDisplay();
      }

      if (e.target.classList.contains("btn-del")) {
        this.limpaUm();
      }

      if (e.target.classList.contains("btn-eq")) {
        this.calcular(this.display.value);
      }
    });
  };

  this.exibirDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus()
  };

  this.limpaDisplay = () => {
    this.display.value = " ";
  };

  this.limpaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.calcular = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.main();
