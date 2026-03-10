import React, { useState, useMemo } from 'react';
import { faltasData } from '../data/mockData';
import { transformarParaBarras, transformarParaPizza } from '../utils/dataTransform';
import FiltroDashboard from '../components/FiltroDashboard';
import { GraficoBarras, GraficoPizza } from '../components/GraficoDashboard';

const DashboardGeral = () => {
  const [filtros, setFiltros] = useState({ rota: 'todos', tipo: 'todos' });

  const dadosFiltrados = useMemo(() => {
    return faltasData.filter(item => {
      const matchRota = filtros.rota === 'todos' || item.rota.toString() === filtros.rota;
      const matchTipo = filtros.tipo === 'todos' || item.tipo === filtros.tipo;
      return matchRota && matchTipo;
    });
  }, [filtros]);

  const dadosBarras = useMemo(() => transformarParaBarras(dadosFiltrados), [dadosFiltrados]);
  const dadosPizza = useMemo(() => transformarParaPizza(dadosFiltrados), [dadosFiltrados]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Dashboard de Faltas - Logística</h1>
      <FiltroDashboard filtros={filtros} setFiltros={setFiltros} />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Faltas por Rota</h3>
          <GraficoBarras dados={dadosBarras} />
        </div>
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Por Categoria</h3>
          <GraficoPizza dados={dadosPizza} />
        </div>
      </div>
    </div>
  );
};

export default DashboardGeral;