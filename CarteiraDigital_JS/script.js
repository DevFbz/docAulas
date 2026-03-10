const prompt = require('prompt-sync')();
console.log("-=-=-=-=-Carteira Digital-=-=-=-=-")

console.log("1 - Acessar conta")
console.log("2 - Sair")
    let opcao = prompt("Escolha uma opção : ");

    switch (opcao) {
        case '1':
            console.log("Saldo: R$ 10.589,00\n")
            console.log("Conta: 564612-2\n")
            console.log("Agência: 7384\n")
            break;

        case '2':
            console.log("Encerrando a carteira. Até mais!");
            break;

        case '3':
        
            break;

        default:
            console.log("Opção inválida, tente novamente.");
            break;
    }

