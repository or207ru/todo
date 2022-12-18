import React, { useState, useEffect } from 'react';

export default function Todo({ props }) {

    const userId = props;
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${userId}`)
            .then(res => res.json())
            .then(data => setTodos(data));
    }, [userId]);

    return (
        <div>
            {todos.map(todo =>
                <div className='todos' key={todo.id}>
                    <p>Todo number {todo.id}: {todo.title}</p>
                </div>
            )}
        </div>
    );
}
