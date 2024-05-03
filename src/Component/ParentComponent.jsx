

import React, { useState,useMemo, useCallback } from 'react'
import Title from './Title';

function ParentComponent() {

    const [Age,setAge]=useState(0)

    const [Salary,setSalary]=useState(0)

const handleAge=(()=>{
    setAge(Age+1)
});

const handlesalary=(()=>{
    setSalary(Salary+1)
})

const isEven=useCallback(()=>{

    let i=0; 
    while(i<20000000) i++;
    
    return Age%2===0
    

},[Age])






  return (
    <div>
      
      <Title />

      <p>Age-{Age}</p>

      <button className='w-24 h-10 bg-slate-400' onClick={handleAge}>icrementAge</button>

      <div>{isEven? "Even":"odd"}</div>
      <p>Salary-{Salary}</p>

      <button className='w-28 h-10 bg-slate-400' onClick={handlesalary}>incrementsalary</button>



    </div>
  )
}

export default ParentComponent
