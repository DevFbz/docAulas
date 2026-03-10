class ValidaCpf {
  constructor(cpfenviado) {
    Object.defineProperty(this, "cpflimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfenviado.replace(/\D+/g, ""),
    });
  }

  éSequencia() {
    return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
  }

  geraNovoCpf() {
    const cpfsemDigitos = this.cpflimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfsemDigitos);
    const digito2 = ValidaCpf.geraDigito(cpfsemDigitos + digito1);
    this.novoCPF = cpfsemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfsemDigitos) {
    let total = 0;
    let reverso = cpfsemDigitos.length + 1;

    for (let stringNum of cpfsemDigitos) {
      total += reverso * Number(stringNum);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (typeof this.cpflimpo !== "string") return false;
    if (!this.cpflimpo) return false;
    if (this.cpflimpo.length !== 11) return false;
    this.geraNovoCpf();
    return this.novoCPF === this.cpflimpo;
  }
}

const Validacpf = new ValidaCpf("070.987.720-03");


Validacpf.valida() ? console.log('CPF Válido!') : console.log('CPF Inválido!')