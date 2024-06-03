import React, { useState } from "react";

function Detailform() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  const [mail, setmail] = useState("");
  const [inshow, setinshow] = useState(false);

  const handlename = (e) => {
    setname(e.target.value);
  };
  const handleage = (e) => {
    setage(e.target.value);
  };

  const handlephone = (e) => {
    setphone(e.target.value);
  };

  const handlemail = (e) => {
    setmail(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    setinshow(true);
  };
  return (
    <div>
      <h1>student Detials </h1>
  {!inshow ?    <form>
        <label>Name:</label>
        <input onChange={handlename} placeholder="Enter your Name" />

        <br />
        <br />

        <label>Age:</label>
        <input onChange={handleage} placeholder="Enter your Age" />

        <br />
        <br />

        <label>Phone:</label>
        <input onChange={handlephone} placeholder="Enert your Number" />

        <br />
        <br />

        <label>Mail:</label>
        <input onChange={handlemail} placeholder="Enter your Name" />

        <br />
        <br />
        <button onClick={handleclick}>Sumite</button>
      </form>
:" "}
      {inshow ? (
        <div>
          <h1>Name :{name}</h1>
          <h1>Age : {age}</h1>
          <h1>phone :{phone}</h1>
          <h1>Mail : {mail}</h1>
        </div>
      ) : (
        "-"
      )}
    </div>
  );
}
export default Detailform;
