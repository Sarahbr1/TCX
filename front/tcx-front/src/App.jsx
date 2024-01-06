import { useState } from 'react'
import './App.css'
import MiniSideBar from './components/MiniSideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBarRouting from './components/SideBarRouting'

function App() {
  const [count, setCount] = useState(0)

  return (
   <SideBarRouting/>
    
     
  )
}

export default App

