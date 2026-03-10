// Função para calcular os meses e dias desde a data de referência (29/12/2024)
function calcularDias() {
    const dataReferencia = new Date("2024-12-29"); // Data fixa de referência (29/12/2024)
    const hoje = new Date(); // Data atual

    // Calculando a diferença de anos, meses e dias
    let anos = hoje.getFullYear() - dataReferencia.getFullYear();
    let meses = hoje.getMonth() - dataReferencia.getMonth();
    let dias = hoje.getDate() - dataReferencia.getDate();

    // Ajustando a diferença de meses e anos caso o mês da data referência seja maior
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Ajustando a diferença de dias
    if (dias < 0) {
        meses--;
        const ultimoDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += ultimoDiaDoMes;
    }

    // Função para pluralizar as palavras
    function pluralize(unit, value) {
        return value === 1 ? unit : unit + "s";
    }

    // Exibindo o resultado no formato: "Se passaram X mês(es) e Y dia(s)"
    if (anos >= 0 || meses >= 0 || dias >= 0) {
        let resultado = `Se passaram ${meses} ${pluralize('mês', meses)} e ${dias} ${pluralize('dia', dias)} desde o dia que te pedi em namoro meu amor. Te Amo com a minha Alma <3`;
        document.getElementById('contador').textContent = resultado;
    } else {
        document.getElementById('contador').textContent = "A data selecionada é no futuro!";
    }
}

// Chama a função para calcular e exibir a diferença imediatamente ao carregar a página
calcularDias();
