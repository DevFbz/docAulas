export const transformarParaBarras = (dados) => {
    const agrupado = dados.reduce((acc, item) => {
      const rota = item.rota;
      acc[rota] = (acc[rota] || 0) + item.quantidadeFaltante;
      return acc;
    }, {});
  
    return Object.keys(agrupado).map(key => ({
      name: `Rota ${key}`,
      total: agrupado[key]
    }));
  };
  
  export const transformarParaPizza = (dados) => {
    const contagem = dados.reduce((acc, item) => {
      const label = item.tipo === 'rj01' ? 'Medicamentos' : 'Cosméticos';
      acc[label] = (acc[label] || 0) + item.quantidadeFaltante;
      return acc;
    }, {});
  
    return Object.keys(contagem).map(label => ({
      name: label,
      value: contagem[label]
    }));
  };