import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const GraficoBarras = ({ dados }) => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <ResponsiveContainer>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" /> {/* 'name' é o que definimos no Passo 2 */}
          <YAxis />
          <Tooltip cursor={{fill: '#f5f5f5'}} />
          <Bar 
             dataKey="total"  // 'total' é o valor que definimos no Passo 2
             fill="#3182ce"   // Uma cor azul bonita
             radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};