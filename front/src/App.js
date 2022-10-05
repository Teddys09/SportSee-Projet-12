import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import User from './pages/User';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />

        <Route path="*" element={<Error />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
