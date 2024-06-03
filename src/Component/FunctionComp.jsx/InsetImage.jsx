import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

function InsetImage() {
  const [count, setCount] = useState(true);

  const handless = () => {
    setCount(!count);
    console.log("asdf");
  };

  return (
    <div>
      {count ? <FaHeart /> : <FaHeartBroken />} 
      
      
      <br/>

      <button onClick={handless}>break</button>
    </div>
  );
}
export default InsetImage;
