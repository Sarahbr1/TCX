import React from 'react';
import DropdownButton from '../components/DropdownButton';

export default function EditProfil() {
  return (
    <div className=' bg-bg'>
      <div className='font-body grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-24 mt-6'>
        <div className='flex-col items-center md:max-content border-r-2 border-vert-foncé-0 pr-4 pl-4 mb-6'>
          <div className='mb-4'>Infos personnelles</div>
          <div>Sécurité</div>
        </div>
        <div className='flex flex-col col-span-2 space-y-12 mb-6 md:col-span-2'>
          <h1 className=' text-4xl'>Informations personnelles</h1>
          <div className='flex relative flex-col justify-center items-start '>
            <label className='ml-4 mb-1 font-normal'>Nom</label>
            <input required type="text" name='lastName' value="nom" className='border-2 border-vert-foncé-0 rounded-lg h-10 w-80 px-10 focus:outline-none' />
          </div>
          <div className='flex relative flex-col justify-center items-start '>
            <label className='ml-4 mb-1 font-normal'>Prénom</label>
            <input required type="text" name='firstName' value="prénom" className='border-2 border-vert-foncé-0 rounded-lg h-10 w-80 px-10 focus:outline-none' />
          </div>
          <div className="mt-4">
            <DropdownButton />
          </div>
          <div className='flex items-center justify-center md:justify-end mt-10 mb-5 md:mr-2'>
            <div className='flex space-x-2'>
              <button className='grid grid-cols-3 items-center outline outline-2 outline-blue-primary bg-white text-gray-500 font-bold w-36 h-11 rounded-full hover:bg-vert-foncé-0 hover:outline-vert-foncé-0 hover:text-white active:bg-blue-primary duration-[125ms]'>
                <div></div>
                <p className='justify-self-center'>Annuler</p>
              </button>
              <button className='grid grid-cols-3 items-center outline outline-2 outline-blue-primary bg-blue-primary text-vert-foncé-0 font-bold w-36 h-11 rounded-full hover:bg-vert-foncé-0 hover:outline-vert-foncé-0 hover:text-white active:bg-blue-primary duration-[125ms]' type='submit' onClick={(e) => handleUpdate(e)}>
                <div></div>
                <p className='justify-self-center'>Enregistrer</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
