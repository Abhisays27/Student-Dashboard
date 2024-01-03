import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage.jsx';
import Dashboard from './Layouts/Dashboard.jsx';
import RegistrationPage from './Layouts/RegistrationPage.jsx';
import Diaryone from './Layouts/Diary.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route  path="/" element={<Mainpage/>} />
      <Route  path="/dashboard" element={<Dashboard/>} />
      <Route  path="/register" element={<RegistrationPage/>} />
      <Route  path="/diary" element={<Diaryone/>} /> 
      
    </Routes>
  </Router>
  );
}

export default App;
