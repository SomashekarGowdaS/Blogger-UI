import React from 'react'
import { Link, Route } from 'react-router-dom'
import UsersList from './UsersList'
import PostsList from './PostsList'
import UserDetails from './UserDetails'
import PostDetails from './PostDetails'

function App() {
  return (
    <div>
      <span> <Link to='/' > Home </Link> </span>
      <span> <Link to='/users' > Users </Link> </span>
      <span> <Link to='/posts' > Posts </Link> </span>


      <Route path='/users' component={UsersList} exact={true} />
      <Route path='/posts' component={PostsList} exact={true} />
      <Route path='/users/:id' component={UserDetails} />
      <Route path='/posts/:id' component={PostDetails} />
    </div>
  );
}

export default App;
