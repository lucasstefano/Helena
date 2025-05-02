import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Mensagens from './pages/Mensagens';
import DashboardCRM from './pages/Graphs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='Mensagens' element={<Mensagens/>}/>
        <Route path="CRM" element={<DashboardCRM/>}/>
      </Routes>
    </Router>
  );
}

export default App;
