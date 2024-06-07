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
            <th>Options</th>
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
                <td>
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          "http://localhost:4000/users/deleteUser/" + user._id
                        )
                        .then((res) => {
                          if (res.data.status === 200) {
                            alert("user deleted successfully");
                            window.location.reload();
                          } else {
                            Promise.reject();
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    Delete
                  </button>
                  <button>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewData;
