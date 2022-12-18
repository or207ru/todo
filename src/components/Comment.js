import React, { useState, useEffect } from 'react';

export default function Coment({ props }) {

    const postId = props;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [postId]);

    return (
        <div>
            {comments.map(comment =>
                <div className='comments' key={comment.id}>
                    <p>username: {comment.name}</p>
                    <p>email: {comment.body}</p>
                </div>
            )}
        </div>
    );
}