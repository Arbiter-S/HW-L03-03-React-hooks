import { useState, useEffect } from "react";
import User from "./User";

function UserList({ users, setUsers }) {
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col gap-2 p-4">
      {users.map((user) => (
        <User key={user.id} {...user} setUsers={setUsers} />
      ))}
    </div>
  );
}

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default UserList;
