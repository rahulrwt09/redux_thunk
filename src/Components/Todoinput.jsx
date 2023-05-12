import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Todoinput = ({addtodo}) => {
    const [text, settext]= useState("");
    const addtodohandel=()=>{
     addtodo(text);
     settext(" ")
    }
  return (
   
    <div>
      <input type='text' placeholder='enter todo'
        value={text}
        onChange={(e)=>settext(e.target.value)}
      />
      <button onClick={addtodohandel}>Add todo</button>
    </div>
  )
}

export default Todoinput
