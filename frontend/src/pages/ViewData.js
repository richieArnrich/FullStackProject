import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <h1>User Names in List</h1>
      {console.log(users)}
      
    </div>
  );
}

export default ViewData;
