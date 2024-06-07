import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const obj1 = useParams();
  console.log(obj1);
  let handleSubmit = (event) => {
    let inputObj = { name, email, password, contact };
    console.log(inputObj);

    let url = "http://localhost:4000/users/updateUser/" + obj1.id;
    axios
      .put(url, inputObj)
      .then((res) => {
        alert("updated");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <div>
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
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdatePage;
