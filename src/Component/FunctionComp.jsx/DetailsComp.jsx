import React, { useState } from 'react'

function DetailsComp() {

    const[count,setCount] = useState(0)

    const handless =()=>{
        setCount(count+1)
        console.log("asdf")
    }

  return (

    <div>
        
        <h1>count ={count}</h1>

        <button onClick={handless}>add</button>
        
        
        
        
        </div>
  )
}
export default DetailsComp