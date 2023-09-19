import React, { useState } from "react";

function StateDemo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h1>State Demo!</h1>
      <form>
        <label>firstName</label>
        <input type="text" onChange={handleFirstName} />
        <label>lastName</label>
        <input type="text" onChange={handleLastName} />
      </form>
      <ul>
        <li>firstName: {firstName}</li>
        <li>lastName: {lastName}</li>
      </ul>
    </>
  );
}

export default StateDemo;
