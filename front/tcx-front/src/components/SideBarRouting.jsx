import React from 'react'
import SideBar from './SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParamSideBar from './ParamSideBar'
import ProfilSideBar from './ProfilSideBar'
import Securite from '../pages/Securite'
export default function SideBarRouting() {
  return (
    <BrowserRouter>
        <div className='flex max-w-screen max-h-screen overflow-scroll'> 
    <div className=' col-auto'>
    <SideBar />
    </div>
    <div>
      <Routes>
        <Route path='/' element={<Acceuil />}></Route>
        <Route path='/patients' element={<Patients />}></Route>
        <Route path='/calendrier' element={<Calendrier />}></Route>
        <Route path='/notifications' element={<Notifications />}></Route>
        <Route path='/monprofil/*' element={<ProfilSideBar />}></Route>
        <Route path="/parametres/*" element={<ParamSideBar />} />

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
    return <ProfilSideBar/>
  }
  function Parametres(){
    return <ParamSideBar/>
        
  }