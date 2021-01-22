import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostDetails = (props) => {
    const { id } = props.match.params
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            setPost(response.data);
            axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
                .then((response) => {
                    setUser(response.data);
                })
                .catch((error) => {
                    alert(error.message);
                })

                axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${response.data.userId}`)
                .then((response) => {
                    setComments(response.data);
                })
                .catch((error) => {
                    alert(error.message);
                })
        })
        .catch((error) => {
            alert(error.message);
        })
    }, []);

    return (
        <div>
            <h2> USER NAME: { user.name } </h2>
            <h3> TITLE: { post.title } </h3>
            <h4> BODY: <br /> { post.body } </h4>
            <hr />
            <h3> COMMENTS </h3>
            <ul>
                { comments.map(comment => {
                    return <li key={ comment.id } > { comment.body } </li>
                }) }
            </ul>
            <hr />
            <p> <Link to={ `/users/${user.id}` } > More posts of author: { user.name } </Link> </p>
            <br /> <br />
            <p> <Link to='/posts' > Back </Link> </p>
        </div>
    )
}

export default PostDetails