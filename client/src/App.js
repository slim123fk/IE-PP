import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home'
import Backyard from './Pages/backyarddesign'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/home' element= { <Home />} />
        <Route path ='/backyard' element = {<Backyard />} />
      </Routes>
    
    
    </BrowserRouter>
  
  
  );
}

export default App;
