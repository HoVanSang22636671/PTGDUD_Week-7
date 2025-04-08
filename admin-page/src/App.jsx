import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Analytics from './components/Analytics';
import Messages from './components/Messages';
import Integrations from './components/Integrations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/integration" element={<Integrations />} />
      </Routes>
    </Router>
  );
}

export default App;
