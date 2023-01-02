import React, {useState, useEffect} from 'react';

function UserTodos({userId}){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((res) => res.json())
        .then(setTodos)
        .catch((err) => console.log(err))
    }, [])

    const allTodos = todos.map((todo) => (
        <div key={todo.id}>
            {todo.title}
        </div>
    ))

    return (
        <div className="UserTodos">
            {allTodos}
        </div>
    )
}

export default UserTodos