import  { Component } from 'react'
import './style.css'
class ClassComp extends Component{
    constructor(){
        super()
        this.state={
            internalStyledText:'This is done using inline css',
            externalStyleText:'This is done using external css',
            heading:'This is Created using Class Component'
        }
    }
    render(){
        return(
            <div className='box boxC'>
               <h1>{this.state.heading}</h1>
               <p className='external'>{this.state.externalStyleText}</p>
               <p style={{color:'blue' , fontSize:'22px'}}>{this.state.internalStyledText}</p>
            </div>
        )
    }
}
export default ClassComp;