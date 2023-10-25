import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './components/Footer';


function App() {
  return (
<div>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />


  </Routes>
  <Footer/>
</div>  
  );
}

export default App;
