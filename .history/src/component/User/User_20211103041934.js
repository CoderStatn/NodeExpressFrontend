import React, { useEffect, useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])
    return (
        <div>
            <h2>Found Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={}
                    >{user.name}</li>)
                }
            </ul>
        </div>
    );
};

export default User;