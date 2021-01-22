import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserDetails = (props) => {
    const { id } = props.match.params
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((error) => {
            alert(error.message);
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((error) => {
            alert(error.message);
        })
    }, []);

    return (
        <div>
            <h1> USER NAME: { user.name } </h1>
            <h3> POSTS WRITTEN BY USER </h3>
            <ul>
                { posts.map(post => {
                    return <li key={post.id} > <Link to={ `/posts/${post.id}` } > { post.title } </Link> </li>
                }) }
            </ul>
            <br /> <br />
            <p> <Link to='/users' > Back </Link> </p>
        </div>
    )
}

export default UserDetails