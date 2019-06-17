import React, { Component } from 'react'

class Contact extends Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}

export default Contact