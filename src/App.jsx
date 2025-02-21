import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")

const submiteName = (e)=>{

  console.log(e.target.value);
  setName(e.target.value);
}

  return (
   <div>
        <h1>hiii {name}</h1>
         <form>
          <input type='text'  onChange={(e)=>{
            submiteName(e)
          }}/> 
          <button type='submite'>Submite </button>
         </form>
    </div>  
  )
}

export default App
