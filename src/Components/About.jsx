import React from 'react'
import { useState } from 'react';

function About() {
    const[index,setIndex]=useState(0)
    const courses=["Web Developement","App Developement","Data Science","Machine Learning"];
    setTimeout(()=>setIndex(index+1),1000)
    
       
        
    
  return (
    <div className='flex flex-col items-center justify-center h-fit bg-yellow-300 py-10'>
        <h1 className='pb-6 font-sans text-3xl'>Learn with us</h1>
        <h1 className='pb-6 font-sans text-2xl'>Grow with us.</h1>
        <h2 className='pb-6 font-sans text-xl'>Learn <span className='text-red-700'>{courses[index%4]}</span></h2>
        <button className='bg-black text-white px-4 py-1.5 rounded'>Get Started</button>
    </div>
  )
}

export default About;