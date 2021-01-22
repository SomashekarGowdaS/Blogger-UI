import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UsersList = (props) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            alert(error.message);
        })
    }, []);

    return (
        <div>
            <h1> Users List: { users.length } </h1>
            <ul>
                { users.map(user => {
                    return <li key={user.id} > <Link to={ `/users/${user.id}` } > { user.name } </Link> </li>
                }) }
            </ul>
        </div>
    )
}

export default UsersList