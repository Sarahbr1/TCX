import { useState } from 'react'
import './App.css'
import MiniSideBar from './components/MiniSideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='flex'> 
    <div className=' col-auto'>
      <MiniSideBar></MiniSideBar>
      </div>
      <Routes>
        <Route path='/notifedit' element={<NotifEdit />}></Route>
        <Route path='/aide' element={<Aide />}></Route>

      </Routes>
      </div>
    </BrowserRouter>
    
     
  )
}

export default App

function NotifEdit(){
  return <h1>john doe</h1>
}
function Aide(){
  return <h1>Comment pourrions nous vous aider</h1>
}