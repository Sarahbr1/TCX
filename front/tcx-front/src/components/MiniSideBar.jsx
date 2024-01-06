import React from 'react'
import { Link } from 'react-router-dom'
export default function MiniSideBar() {
  return (
    <div className=' flex flex-col border-vert-foncé-1 bg-bg bg-opacity-20 p-2 text-sm h-screen max-w-50 divide-x-2 divide-x-reverse ' >
        <h1 className='text-2xl ml-4'>Paramètres</h1>
        <ul className=' nav nav-pills flex-col p-0 mt-10'>
  <li className=' nav-item mr-16 '>
    <Link to='/parametres/notifedit'>
    <i class="fa-solid fa-bell me-2 ml-5 p-3"></i>
    <span className='  text-black text-opacity-6'>Notifications</span>
    </Link> 
  </li>
  <li className=' nav-item mr-16 '>
    <Link to='/parametres/aide' href="">
    <i class="fa-solid fa-circle-info me-2 ml-5 p-3"></i>
    <span className='  text-black text-opacity-6'>Aide</span>
    </Link> 
  </li>
  </ul>
</div>
  )
}
