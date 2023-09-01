// eslint-disable-next-line no-unused-vars
import React from 'react'

function Header() {
  return (
    <div className="flex flex-col md:justify-between px-20 py-4 h-15 bg-yellow-200 sm:flex-row">
    <div className='md:w-1/4  w-1/2 mx-auto'><strong className='font-bold text-xl'>WsCube Tech.</strong></div>
    
    <div className='w-3/4 md:block'>
      <ul className='flex justify-between'>
        {
           ['Home','Company','Resources','About','Contact'
          ].map(item =>
         
          // eslint-disable-next-line react/jsx-key
          <li className='pr-2 pb-1 text-lg border-b-2 border-yellow-200  hover:text-blue-700 hover:border-sky-400 hover:cursor-pointer'>{item}</li>
          )
        }
      </ul>
    </div>
    
    </div>

  )
}

export default Header;