import React, {useEffect, useState} from 'react'
import UserTodos from './UserTodos';

function App() {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(setUsers)
    .catch((err) => {
      console.log(err)
      })
  }, [])

  const allUsers = users.map((user) => (
    <div key = {user.id}>
      <button onClick={() => setUserId(user.id)}>{user.name}</button>
      {user.id === userId ? <UserTodos userId ={user.id}/> : ""}
    </div>
  ))

  return (
    <div className = "App">
      {allUsers}
    </div>
  );
}

export default App;
