import React, { useState, useEffect } from 'react';

export default function ReadMore({ props }) {

    const userId = props;
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/?id=${userId}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [userId]);

    return (
        <div>
            {details.map(detail =>
                <div className='details' key={detail.id}>
                    <p>username: {detail.username}</p>
                    <p>email: {detail.email}</p>
                    <p>city: {detail.city}</p>
                    <p>phone: {detail.phone}</p>
                </div>
            )}
        </div>
    );
}
