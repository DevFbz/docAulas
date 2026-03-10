// Agrupa faltas por Rota (Ex: 868, 900...)
export const agruparPorRota = (dados) => {
    const resumo = dados.reduce((acc, item) => {
      const rota = item.rota;
      acc[rota] = (acc[rota] || 0) + item.quantidadeFaltante;
      return acc;
    }, {});
  
    // Formata para o Recharts: [{ name: '868', total: 50 }, ...]
    return Object.keys(resumo).map(key => ({
      name: `Rota ${key}`,
      total: resumo[key]
    }));
  };
  
  // Agrupa faltas por Tipo (rj01 vs rj07)
  export const agruparPorTipo = (dados) => {
    const resumo = dados.reduce((acc, item) => {
      const tipo = item.tipo === 'rj01' ? 'Medicamentos' : 'Cosméticos';
      acc[tipo] = (acc[tipo] || 0) + item.quantidadeFaltante;
      return acc;
    }, {});
  
    return Object.keys(resumo).map(key => ({
      name: key,
      value: resumo[key]
    }));
  };