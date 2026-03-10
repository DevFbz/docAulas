function criarCalc() {
  return {
    display: document.querySelector(".display"),
    iniciaCalc() {
      this.pegarClick();
    },

    pegarClick() {
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-num")) {
          this.exibirDisplay(e.target.innerText);
        }
        if (e.target.classList.contains("btn-clear")) {
          this.limpaDisplay();
        }
        if (e.target.classList.contains("btn-del")) {
          this.limpaUm();
        }
        if (e.target.classList.contains("btn-eq")) {
          this.Calcular(this.display.value);
        }
      });
    },

    exibirDisplay(valor) {
      this.display.value += valor;
    },

    limpaDisplay() {
      this.display.value = " ";
    },

    limpaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    Calcular(valor) {
      let valorConta = eval(valor);
      this.display.value = valorConta
    
    },
  };
}

const main = criarCalc();
main.iniciaCalc();
