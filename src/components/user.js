import React from 'react'
import {  Link } from 'react-router-dom'
class Users extends React.Component {
  render() {
    return (
      <div>
    <h1>Users</h1>
    <li>
          <Link to="/stud">student</Link>
        </li>
        <li>
          <Link to="/fac">faculty</Link>
        </li>
        </div>
    )
  }
}
export default Users