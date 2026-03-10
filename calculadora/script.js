function criarCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-del"),
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter()
    },

    pressionaEnter(){
        this.display.addEventListener('keyup', e=>{
            if(e.keyCode === 13){
                this.realizaConta()
            }
        })
    },
    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
          if (el.classList.contains("btn-clear")) {
            this.limpa();
          }
          if (el.classList.contains("btn-del")) {
            this.limpaUm();
          }
          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }
          
        }.bind(this)
      );
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    limpa() {
      this.display.value = "";
    },

    limpaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta(valor) {
      let conta = this.display.value;
      try {
        conta = eval(conta)
        if(!conta){
            alert('Conta inválida')
            return
        }

        this.display.value = String(conta)
      } catch (e) {
        alert('Conta Inválida')
        return
      }
    },
  };
}
const calc = criarCalculadora();
calc.inicia();
console.log(calc);
