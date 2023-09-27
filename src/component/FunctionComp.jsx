import React from 'react';
import './style.css'
function FunctionComp() {
    return (
        <div className="box boxF">
            <h1>This is Created using Function Component</h1>
            <p className='external'>This is done using external css</p>
            <p style={{color:'blue' , fontSize:'22px'}}>This is done using inline css</p>
        </div>
    )
}
export { FunctionComp };