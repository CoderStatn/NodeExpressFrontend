import React, { useEffect, useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
    },[])
    return (
        <div>
            
        </div>
    );
};

export default User;