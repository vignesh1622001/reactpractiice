import React, { Component } from "react";
import image from "../assets/OIP.jpeg"
import About from "./About";

class BookMyShow extends Component{
state={
    count:0

}
handelclick =()=>{
this.setState({count:this.state.count+1})
    console.log("vicky");
}
render(){
    return(
        <div> 
<h1> lover </h1>
<img src={image}></img>
<h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magnam voluptatibus expedita aliquam error similique excepturi laudantium recusandae optio nam perferendis beatae sapiente, corrupti repellat nihil commodi, dolor tempora officia.</h2>


<p>Time 3hr</p>
<p>count {this.state.count} </p>
<button onClick={this.handelclick}> add ticket</button>

<About phone="1234567" />
        </div>
        
    )
}






}
export default BookMyShow