
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
