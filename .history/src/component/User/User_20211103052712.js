import React, { useEffect, useRef, useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name: name, email: email}

        fetch('http://localhost:5000/users', {
            method: "post",
            header: {
                'content-type':'application.json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                const addedUsers = data;
                const newUsers = [...users,added]
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Found Users: {users.length}</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder='Name' />
                <input type="email" ref={emailRef} placeholder='Email' />
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