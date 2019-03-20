// Counter component using internal state
import React, { Component } from 'react';

import Display from './display';

class LocalCounter extends Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  subOne = () => {
    if (this.state.count !== 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  resetCount = () => {
    this.setState({ count: 0 })
  }

  render () {
    return (
      <Display
        addOne={this.addOne}
        subOne={this.subOne}
        resetCount={this.resetCount}
        count={this.state.count}
        title="Local State (class)"
      />
    )
  }
}

export default LocalCounter
