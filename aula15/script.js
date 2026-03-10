function main(){
    const num = Number(prompt("Digite um número:"));

    const numDigitado = document.getElementById('numDigitado');
    const text = document.getElementById('text');
    numDigitado.innerHTML = num;
    
    text.innerHTML = "";
    text.innerHTML += `<p>Raiz Quadrada de ${num}: ${num ** 1/2}</p>`;
    text.innerHTML += `<p>Resto da Divisão de ${num}: ${num % 2}</p>`;
    text.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`
    text.innerHTML += `<p>${num} é um NaN: ${Number.isNaN(num)}</p>`
    text.innerHTML += `<p>Arredondado p cima:${Math.ceil(num)}</p>`
    text.innerHTML += `<p>Arredondado p baixo:${Math.floor(num)}</p>`
    text.innerHTML += `<p>Número random entre 5 e 10: ${Math.random() * (10-5)+5}</p>`
}
main()




