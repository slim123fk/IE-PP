import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import backyarddesign from './backyarddesign'











function Home() {
 const navigae = useNavigate();

 const gotobackyard =() =>{
    navigae("/backyard")
 }
  return (
    
    <div>
        <Navbar />
        <button onClick={gotobackyard}>gotobackyard</button>
        
        </div>
  )
}

export default Home