import React from 'react'

export default function RDVCard() {
  return (
    <div className='flex flex-col w-80 h-16 border-1 rounded-lg border-teal-600 bg-teal-600 bg-opacity-25 p-3'>
        <div className='flex justify-between'>
            <div>Samedi</div>
            <div>22/04</div>
        </div>
        <div className='flex justify-between'>
            <div className='font-bold'>Ahmed Hamida</div>
            <div>13h-00 14h-00</div>
        </div>
    </div>
  )
}
