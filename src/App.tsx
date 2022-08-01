import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AlarmList from './ui/AlarmList';
import Login from './ui/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alarms" element={<AlarmList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
