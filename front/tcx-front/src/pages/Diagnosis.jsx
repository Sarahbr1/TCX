import React from 'react'

export default function Diagnosis() {
  return (
    <div className=' mx-24 text-gray-600 mt-8'>
        <p className=' text-2xl font-bold'>Diagnostiquer avec l'IA</p>
        <p className='text-sm py-5'>Offrez à vos diagnostiques une précision inégalée. Cet outil d'analyse de radiographies cérébrales détecte rapidement les tumeurs, vous permettant d'apporter des soins proactifs et de sauver des vies.</p>
        
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-bg dark:hover:bg-bray-800 dark:hover:text-bg dark:bg-bg hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-200">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 dark:hover:text-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 "><span class="font-semibold">Importez ou glissez-déposez ici une radiographie cérébrale</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400 ">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
<div className=" flex w-full justify-end mt-7">
          <button className=" block bg-vert-foncé-0 text-white pl-5 pr-5 rounded-md pt-2 pb-2">
            Analyser
          </button>
</div>
    </div>
  )
}
