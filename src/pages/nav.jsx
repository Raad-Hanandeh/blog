import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";



const Nav=()=>{
const [click,setClick]=useState(false);
const handleClick=()=>{
    setClick(!click)
}
const content=<>



<div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>



<ul className='text-center text-xl p-20'>


           
<li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded '>Home</li>
         



<li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>


        



<li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Services</li>
          
     



<li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Projects</li>

           

   
<li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
        

        </ul>
    </div>

</>

  return (

<nav>

    <div className='h-10vh justify-between z-50 text-white lg:py-5 px-20 py-4 flex'>
        <div className='flex items-center flex-1'>
            <span className='text-3xl font-bold'>Logo</span>
        </div>
        <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>

            <div className='flex-10 '>
            <ul className='flex gap-8 mr-16 text-[18px]'>
                
   
           <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
           



        
           <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
         


           
           <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Services</li>
          


          
           <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Projects</li>


     
           <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer' >Contact</li>
        


            </ul>

            </div>

        </div>



          <div>
        {click && content}
       </div>

       <button className='block sm:hidden transition' onClick={handleClick}>
        {click ? <FaTimes /> :  <LuMenu />}
       </button>
    </div>
</nav>
    

  
    

  )
}

export default Nav
