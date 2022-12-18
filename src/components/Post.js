import React, { useState, useEffect } from 'react';
import Comment from './Comment';

export default function Post() {

    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [postId]);

    return (
        <div>
            {posts.map(post =>
                <div className='posts' key={post.id}>
                    <button onClick={() => setPostId(post.id)}><h2>{post.title}</h2></button>
                    <p>{post.body}</p>
                    {postId == post.id ? <Comment props={post.id}></Comment> : <></>}
                    <br></br>
                </div>
            )}
        </div>
    );
}
