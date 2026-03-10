function main() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const inputPeso = evento.target.querySelector("#pesoId");
    const inputAltura = evento.target.querySelector("#alturaId");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getImc(peso, altura);

    function getImc(peso, altura) {
      const imc = peso / altura ** 2;
      return imc.toFixed(2);
    }

    const categoria = getCategoria(imc);

    function getCategoria(imc) {
      const categoria = [
        "Abaixo do Peso!",
        "Peso normal!",
        "Sobrepeso!",
        "Obesidade grau 1!",
        "Obesidade grau 2!",
        "Obesidade grau 3!",
      ];

      if (imc >= 39.9) return categoria[5];

      if (imc >= 34.9) return categoria[4];

      if (imc >= 29.9) return categoria[3];

      if (imc >= 24.9) return categoria[2];

      if (imc >= 18.5) return categoria[1];

      if (imc < 18.5) return categoria[0];
    }
    if (!peso && !altura) {
        setResultado("Peso e Altura inválidos!", false);
        return
      }
    if (!peso) {
      setResultado("Peso inválido", false);
      return;
    }

    if (!altura) {
      setResultado("Altura inválido", false);
      return;
    }
    

    const msg = `Seu IMC é ${imc} (${categoria})`;
    setResultado(msg, true);
  });

  function criarParagrafo() {
    const p = document.createElement("p");
    return p;
  }

  function setResultado(msg, valid) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";
    const p = criarParagrafo();
    if (valid) {
      p.classList.add("valid");
    } else {
      p.classList.add("error");
    }

    p.innerHTML = msg;

    resultado.appendChild(p);
  }
}

main();
