import React, { useState } from "react";
import "../styles/SignUp.css";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  let handleSubmit = (event) => {
    let inputObj = { name, email, password, contact };
    console.log(inputObj);
    event.preventDefault();
    // axios.post()
  };
  return (
    <form className="myForm">
      <label for="name" id="label">
        Name
      </label>
      <input
        type="text"
        id="name input"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label for="email" id="label">
        Email
      </label>
      <input
        type="email"
        id="email input"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label for="password" id="label">
        Password
      </label>
      <input
        type="password"
        id="password input"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label for="contact" id="label">
        Contact
      </label>
      <input
        type="text"
        id="contact input"
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />
      <button type="submit" id="input" onClick={handleSubmit}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
