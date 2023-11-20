import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';
import Footer from './components/Footer';
import Auth from './components/Auth';


function App() {
  return (
<div>

  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Auth/>} />
    <Route path='/register' element={<Auth register/>} />


  </Routes>
  <Footer/>
</div>  
  );
}

export default App;
