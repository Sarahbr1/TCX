import React from 'react'
import SideBar from './SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MiniSideBarRouting from './MiniSideBarRouting'

export default function SideBarRouting() {
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
        <Route path='/parametres' element={<Parametres />}></Route>
        <Route path="/parametres/*" element={<MiniSideBarRouting />} />

      </Routes>
    </div>
   </div>
   </BrowserRouter>
  )
}

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
  function Parametres(){
    return <MiniSideBarRouting/>
        
  }