import React, { useEffect, useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])
    return (
        <div>
            <h2>Found User: {users.lenght}</h2>
        </div>
    );
};

export default User;