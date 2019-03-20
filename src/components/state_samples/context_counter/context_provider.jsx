// Container to provide context
// Subscribed components can nest several layers deep and still have access
import React, { Component } from 'react';
import CounterContext from './counter_context';

class ContextProvider extends Component {
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

  render() {
    const { count } = this.state;
    const value = {
      addOne: this.addOne,
      subOne: this.subOne,
      resetCount: this.resetCount,
      count,
    };

    return (
      <CounterContext.Provider value={value}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

export default ContextProvider
