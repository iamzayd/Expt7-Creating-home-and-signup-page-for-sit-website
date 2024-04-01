import './App.css';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
