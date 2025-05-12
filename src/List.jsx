import { useState } from 'react'
import './App.css'

function List(props){
    const allData = props.data
    return(
        <div className= "list-container">
            {allData.map((e,index)=>{
                return(
                <div className='list' key={index}>
                    <img src={e.flags.png}></img>
                    <h3>{e.name.common}</h3>
                    <h5>ทวีป : {e.region}</h5>
                </div>)
            })}
        </div>
    )
}

export default List