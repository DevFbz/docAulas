import { Routes, Route } from 'react-router-dom';
import DashboardGeral from './pages/DashboardGeral';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardGeral />} />
    </Routes>
  );
}

export default App;