import { useState } from 'react'
import './App.css'

function Form(props){
    return(
        <div className="input-Container">
            <input type='text' onInput={inputText}></input>
        </div> 
    )
    function inputText(e){
        props.getText(e.target.value)
    }
}

export default Form