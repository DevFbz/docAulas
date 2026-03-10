import React from 'react';
import { REGIOES_MAP, TIPOS_PRODUTO } from '../data/mockData';

const FiltroDashboard = ({ filtros, setFiltros }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', padding: '15px', background: '#eee', borderRadius: '8px' }}>
      <div>
        <label>Região: </label>
        <select name="rota" value={filtros.rota} onChange={handleChange}>
          <option value="todos">Todas as Regiões</option>
          {Object.entries(REGIOES_MAP).map(([id, nome]) => (
            <option key={id} value={id}>{id} - {nome}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Tipo: </label>
        <select name="tipo" value={filtros.tipo} onChange={handleChange}>
          <option value="todos">Todos os Tipos</option>
          {Object.entries(TIPOS_PRODUTO).map(([id, nome]) => (
            <option key={id} value={id}>{id} - {nome}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FiltroDashboard;