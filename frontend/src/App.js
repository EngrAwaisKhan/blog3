import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
