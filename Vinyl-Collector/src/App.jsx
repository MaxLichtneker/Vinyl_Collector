import "./App.css"
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';

function App(){
    return (
    <Router>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/landingpage" element={<LandingPage/>}/>
     </Routes>
    </Router>
  )
}

export default App