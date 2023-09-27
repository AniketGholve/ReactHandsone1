import React,{ useState } from 'react';
import './App.css'
import { FunctionComp } from './component/FunctionComp'
import ClassComp from './component/ClassComp'

function App() {
  let [fval,setFval]=useState(false);
  let [cval,setCval]=useState(false);
  const functionCall=()=>{
    setFval(!fval);
  }
  const classCall=()=>{
    setCval(!cval);
  }
  return (
    <>
      <h3 className='heading'>Styling using Function and Class Component</h3>
      <button className='btn' onClick={functionCall}>To See Styling In Function Component</button>
      <button className='btn' onClick={classCall}>To See Styling In Class Component</button>
      <div className='d-grid'>
        {fval && <FunctionComp />}
        {cval && <ClassComp />}
      </div>
    </>
  )
}

export default App
