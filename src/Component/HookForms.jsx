import React from 'react'

import { useForm } from "react-hook-form"

export default function HookForms() {
  
   
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
         

const Submit = (data)=>{
console.log(data)

}


    return (

    <div>


<label>Name</label>
<input{...register("Name",{required:"Name is Required"})}/>


<p className="text-danger">{errors?.Name?.message}</p>




<br/>
<br/>

<label>Age*</label>
<input{...register("Age",{required:"Age is Required"})}/>


<p className="text-danger">{errors?.Age?.message}</p>

<br/>
<br/>

<label>Phone number</label>
<input{...register("Phone number",{required:"Phone is Required"})}/>

<br/>
<br/>

<label>Email</label>
<input{...register("Email",{required:"Email is Required"})}/>


<br/>
<br/>

<button onClick={handleSubmit(Submit)}>submit</button>

    </div>
  )
}
