import { useState , useEffect} from 'react'
import './App.css'
import Form from './Form'
import List from './List'

function App() {
  const [originalData, setOriginalData] = useState([])
  const [data,setData] = useState([])

  async function fetchData(){
    const res = await fetch('https://restcountries.com/v3.1/all')
    const json = await res.json()
    setOriginalData(json)
    setData(json)
  }

  useEffect(()=>{
      fetchData()
  },[]) 

    function getText(text){
      if (text === "") {
        setData(originalData) 
      }else{
        const newItem = originalData.filter(e=>{
          const ctr = e.name.common.toLowerCase()
          const ctrf = ctr.includes(text)
          return ctrf
      })
        const newCapital = originalData.filter(e=>{
          if(e.capital && e.capital.length>0){
            const cpt = e.capital[0].toLowerCase()
            const cptf = cpt.includes(text)
            return cptf
        }
        })
        const combined = [...new Set([...newItem, ...newCapital])]
        setData(combined)
    }}

  return (
    <>
      <Form getText={getText}/>
      <List data={data}/>
    </>
  )
}

export default App
