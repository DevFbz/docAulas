function ValidaCpf(cpfenviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfenviado.replace(/\D+/g, '');
    }
  });
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false;

    const cpfparcial =this.cpfLimpo.slice(0,-2)
    const digito1 = this.criaDigito(cpfparcial)
    const digito2 = this.criaDigito(cpfparcial + digito1)

    const cpfNovo = cpfparcial + digito1 + digito2;

    console.log(cpfNovo)
    console.log(digito1)
    console.log(digito2)
    return cpfNovo === this.cpfLimpo
}

ValidaCpf.prototype.criaDigito = function(cpfparcial){
    const cpfArray = Array.from(cpfparcial);
    
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val)=>{
        
        ac += (regressivo*Number(val))
        regressivo--;
        return ac;
    },0)
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
    console.log(digito)
}

ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)

    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCpf("529.982.247-25");
// console.log(cpf.cpfLimpo);
if(cpf.valida()){
    console.log('CPF Válido')
}else{
    console.log('CPF Inválido')
}
