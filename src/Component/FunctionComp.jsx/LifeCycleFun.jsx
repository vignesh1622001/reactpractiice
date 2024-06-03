import React, { useEffect, useState } from "react";

function LifeCycleFun() {

  const[count,setcount] =useState();
  
  
  useEffect(()=> {
    console.log("vucky");
  },[]);

  const handleclick =()=>{
    setcount(count-1);
  }


  return(
  
  <div>
    Lifecycle

   <button onClick={handleclick}>sub</button>


  </div>
  )
}
export default LifeCycleFun
