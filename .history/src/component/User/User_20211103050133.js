import React, { useEffect, useRef, useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);
    const nameRef = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    
    const handleAddUser = e => {
        const name = nameRef
        e.preventDefault()
    }
    return (
        <div>
            <h2>Found Users: {users.length}</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder='Name' />
                <input type="submit" value="submit" />
            </form>
            <ul>
                {
                    users.map(user => <li
                        key={user.id}
                    >{user.id}: {user.name}: {user.email}</li>)
                }
            </ul>
        </div>
    );
};

export default User;