import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
        <div className='flex'> 
    <div className=' col-auto'>
    <SideBar />
    </div>
    <div>
      <Routes>
        <Route path='/' element={<Acceuil />}></Route>
        <Route path='/patients' element={<Patients />}></Route>
        <Route path='/calendrier' element={<Calendrier />}></Route>
        <Route path='/notifications' element={<Notifications />}></Route>
        <Route path='/monprofil' element={<Monprofil />}></Route>
      </Routes>
    </div>
   </div>
   </BrowserRouter>
     
  )
}

export default App

function Acceuil(){
  return <h1>welcome home</h1>
}
function Patients(){
  return <h1>Cliquer pour avoir la liste des patients</h1>
}
function Calendrier(){
  return <h1>Rien n'est plannifié pour aujourd'hui</h1>
}
function Notifications(){
  return <h1>Vous n'avez pas de notifications récentes</h1>
}
function Monprofil(){
  return <h1>john doe</h1>
}