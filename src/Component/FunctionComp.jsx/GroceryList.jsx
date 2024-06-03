import  axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


 function GroceryList() {

 
    const [data,setdata] =useState([])
    const [input,setinput] = useState("")    

    const uuid= uuidv4();

    useEffect(()=>{
   handlefecth()
    },[])

 const handlefecth = async ()=>{
    let res =  await axios.get("http://localhost:3000/todoList")
    setdata(res.data)
 }


const handleinput = (e)=>{
    setinput(e.target.value);
}

const handleadd = async ()=>{
    let body={
        task:input,
        id:uuid

    }
    await axios.post("http://localhost:3000/todoList",body)
    handlefecth()
}

const handledelete = async (id)=>{
await axios.delete("http://localhost:3000/todoList/")
handlefecth()

}




  return (

    <div>
<h1 className='mt-5'>GroceryList</h1>

<input onChange={handleinput} className='ms-5 mt-5' placeholder='Enter your List'/>

<button  className='ms-4 btn btn-primary' onClick={handleadd}>Add</button>


<ol className='mt-5'>
{data.map((da)=>(
<div>
    <li>{da.task}</li>
<button className='btn btn-warning mt-3'>Updata</button>
<button onClick={()=>handledelete(da.id)} className=' btn btn-danger ms-3 mt-3'>Delete</button>
</div>



))}

</ol>




    </div>
  


)
}
export default GroceryList