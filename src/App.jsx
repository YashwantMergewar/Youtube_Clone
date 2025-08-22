import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext.js';
import RegisterPage from './pages/RegisterPage.jsx';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element= {<RegisterPage />} />  
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
