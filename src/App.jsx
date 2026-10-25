import "./index.css";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <UserForm users={users} setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
