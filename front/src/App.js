import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import User from './pages/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="*" element={<User />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
