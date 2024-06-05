import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/ViewData.css";
function ViewData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/users/getAllusers").then((res) => {
      //   console.log(res);
      if (res.data.status === 200) {
        setUsers(res.data.users);
      }
    });
  }, []);
  return (
    <div>
      <h1>User Names in Table</h1>
      {console.log(users)}
      <table>
        <thead>
          <tr>
            <th>Obj ID</th>
            <th>name</th>
            <th>email</th>
            <th>contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewData;
