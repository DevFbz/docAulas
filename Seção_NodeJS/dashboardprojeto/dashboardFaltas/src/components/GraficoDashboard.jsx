import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#3182ce', '#38a169', '#ecc94b', '#e53e3e'];

export const GraficoBarras = ({ dados }) => (
  <div style={{ height: 300, width: '100%' }}>
    <ResponsiveContainer>
      <BarChart data={dados}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#3182ce" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const GraficoPizza = ({ dados }) => (
  <div style={{ height: 300, width: '100%' }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie data={dados} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80}>
          {dados.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);