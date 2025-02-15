import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { HomePage } from './pages/HomePage';
import { JoinEventPage } from './pages/JoinEventPage';
import { CreateEventPage } from './pages/CreateEventPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/joinevent" element={<JoinEventPage />} />
          <Route path="/createevent" element={<CreateEventPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
