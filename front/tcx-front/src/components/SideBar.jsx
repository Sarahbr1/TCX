import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    
<div className=' flex flex-col justify-between bg-vert-clair-1 bg-opacity-20 p-2 text-sm h-screen ' >
  <div>
  <a href="" className=' flex items-center'>
    <img src="logo.png" alt="" className=' me-2' height="88" width="88"/>
    <span className=' text-2xl text-vert-foncé-1 mr-1'>MediCare</span>
  </a>
  <hr className=' divide-vert-foncé-1 mt-2 mb-3'/>
<ul className=' nav nav-pills flex-col p-0 m-0'>
  <li className=' nav-item '>
    <Link to='/'>
    <i class="fa-solid fa-house me-2 ml-5 p-3 " ></i>
    <span className='  text-black text-opacity-6'>Acceuil</span>
    </Link> 
  </li>
  <li className=' nav-item '>
    <Link to='/patients' href="">
    <i class="fa-solid fa-people-group me-2 ml-5 p-3"></i>
    <span className='  text-black text-opacity-6'>Patients</span>
    </Link> 
  </li>
  <li className=' nav-item '>
    <Link to='/calendrier'>
    <i class="fa-solid fa-calendar-days me-2 ml-5 p-3 "></i>
        <span className='  text-black text-opacity-6'>Calendrier</span>
    </Link> 
  </li>
  <li className=' nav-item '>
    <Link to='notifications'>
    <i class="fa-solid fa-bell me-2 ml-5 p-3"></i>
        <span className='  text-black text-opacity-6'>Notifications</span>
    </Link> 
  </li>
  <li className=' nav-item '>
    <Link to='monprofil'>
    <i class="fa-solid fa-user me-2 ml-5 p-3 "></i>
        <span className=' text-black text-opacity-6'>Mon Profil</span>
    </Link> 
  </li>
  <li className=' nav-item bg-vert-foncé-0 rounded mt-4  pt-2 pb-2 ml-4 mr-4'>
    <Link to=''>
    <i class="fa-solid fa-brain me-2 p-3 text-white"></i>

        <span className=' text-white text-opacity-6 pr-4'>Diagnostiquer avec l'IA</span>
    </Link> 
  </li>

</ul>
</div>
<ul className=' bottom-5 mt-16'>
  <li>
    <Link to=''>
    <i class="fa-solid fa-right-from-bracket me-2 ml-5 p-3"></i>
    <span>Se déconnecter</span>
    </Link>
  
  </li>
  <li className=' mt-3 mb-5'>
    <Link to='/parametres/*'>
    <i class="fa-solid fa-gear me-2 ml-5 p-3 bg-vert-foncé-0 rounded-full text-white"></i>
    <span className=' text-vert-foncé-0'>Paramètres</span>
 
    </Link>
  </li>
</ul>
</div>
     
  )
}