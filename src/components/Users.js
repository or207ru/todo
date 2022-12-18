import React, { useState, useEffect } from 'react';
import ReadMore from './ReadMore';
import Todo from './Todo';

export default function Users() {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("");
    const [readMore, setReadMore] = useState(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="users">
            {userId ? <button onClick={() => setUserId("")}> Close todos </button> : <></>}
            {users.map(user =>
                <div className='users' key={user.id}>
                    <p> {user.name} </p>
                    <button onClick={() => setUserId(user.id)}> Show todos </button>
                    <button onClick={() => setReadMore(user.id)}> Read more </button>
                    {readMore == user.id ? <button onClick={() => setReadMore(0)}> Close read more </button> : <></>}
                </div>
            )}
            <hr></hr>
            <Todo props={userId}></Todo>
            {readMore ? <ReadMore props={readMore}></ReadMore> : <></>}
        </div >
    );
}
