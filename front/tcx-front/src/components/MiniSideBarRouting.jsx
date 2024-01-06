import React, { useState } from 'react';


export default function MiniSideBar() {
  const [activeSection, setActiveSection] = useState(''); // Use state to track the active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <h1 className='text-2xl ml-4'>Paramètres</h1>
      <ul className='nav nav-pills flex-col p-0 mt-10'>
        <li className={`nav-item mr-16 ${activeSection === 'notifedit' ? 'active' : ''}`}>
          <button onClick={() => handleSectionClick('notifedit')}>
            <i className="fa-solid fa-bell me-2 ml-5 p-3"></i>
            <span className='text-black text-opacity-6'>Notifications</span>
          </button>
        </li>
        <li className={`nav-item mr-16 ${activeSection === 'aide' ? 'active' : ''}`}>
          <button onClick={() => handleSectionClick('aide')}>
            <i className="fa-solid fa-circle-info me-2 ml-5 p-3"></i>
            <span className='text-black text-opacity-6'>Aide</span>
          </button>
        </li>
      </ul>

      {/* Render content based on active section */}
      {activeSection === 'notifedit' && <NotifEdit />}
      {activeSection === 'aide' && <Aide />}
    </div>
  );
}
function NotifEdit(){
    return <h1 className=' flex justify-end'>john doe</h1>
  }
  function Aide(){
    return <h1 className=' flex justify-end'>Comment pourrions nous vous aider</h1>
  }