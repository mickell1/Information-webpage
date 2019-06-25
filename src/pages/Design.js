import React, { Component } from 'react';
import Switch from '../components/Switch'

class Design extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const { toggle } =this.state;
    this.setState({ toggle: !toggle });
  }

  render() {
    return (
      <div>
        <Switch checked={this.state.toggle} onClick={this.handleToggle} />
      </div>
    )
  }
}


export default Design;