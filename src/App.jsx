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
        return e.name.common.toLowerCase().includes(text)
      })
      setData(newItem)
    }}

  return (
    <>
      <Form getText={getText}/>
      <List data={data}/>
    </>
  )
}

export default App
