import React, { useState } from "react";

const App=()=>{
 let [a,seta]= useState(0)

 const increaseCount = ()=>{
  seta(a+1);
 }

const decriseCount = ()=>{
  seta(a-1);
}
  return(
    <div>
    <h1>HIIIIII {a}</h1>
    <button onClick={increaseCount}>increaseCount</button>
    <button onClick={decriseCount}>decriseCount</button>
    </div>
  )
}

export default App;