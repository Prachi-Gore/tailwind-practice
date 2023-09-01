// eslint-disable-next-line no-unused-vars
import React from 'react'


function Card() {
  return (
    <div className='rounded-lg flex flex-col  bg-red-500 w-fit h-fit px-12 py-8 hover:scale-105 m-auto h-full
    '>
        <strong className='text-center text-yellow-300'>Web Developement</strong>
        <h1 className='font-black text-center'>$ 145</h1>
        <p className='w-40 text-center  my-auto '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum beatae dolores perferendis expedita vero deleniti non numquam dicta cum iusto?</p>
        <button className='mt-4 bg-green-500 text-black px-4 py-1.5 rounded'>Start Trial</button>
    </div>
  )
}

export default Card;