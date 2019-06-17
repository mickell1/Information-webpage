import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const Photo = ({ match }) => <p>{match.params.id}</p>

class Photos extends Component {
  render() {
    const { url } = this.props.match
    return (
      <div>
        <h1>Photo</h1>
        <strong>select a photo</strong>
        <ul>
          <li>
            <Link to="/photos/1">Photo 1 </Link>
          </li>
          <li>
            <Link to="/photos/2">Photo 2 </Link>
          </li>
          <li>
            <Link to="/photos/3">Photo 3 </Link>
          </li>
        </ul>
        <Route path="/photos/:id" component={Photo} />
      </div>
    )
  }
}
export default Photos