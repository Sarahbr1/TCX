import React from 'react'
import MiniSideBar from './MiniSideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function MiniSideBarRouting() {
  return (
    
    <div className='flex'> 
  <div className=' col-auto'>
    <MiniSideBar></MiniSideBar>
    </div>
    <Routes>
      <Route path='/notifedit' element={<NotifEdit />}></Route>
      <Route path='/aide' element={<Aide />}></Route>

    </Routes>
    </div>
  
  )
}
function NotifEdit(){
    return <h1>john doe</h1>
  }
  function Aide(){
    return <h1>Comment pourrions nous vous aider</h1>
  }