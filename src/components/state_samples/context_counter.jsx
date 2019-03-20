import React from 'react';

import ContextProvider from './context_provider';
import CounterContext from './counter_context';
import Display from './display';

// This component uses our context provider to wrap another
const ContextCounter = () => {
  return (
    <>
      <ContextProvider>
        <OtherComponent />
      </ContextProvider>
    </>
  )
}

// ...and another
const OtherComponent = () => <AnotherComponent />

// ...and another
const AnotherComponent = () => <ContextDisplay />

// ...which eventually leads to the subscribing component
const ContextDisplay = () => {
  return (
    <CounterContext.Consumer>
      {({addOne, subOne, resetCount, count}) => {
        return (
          <Display
            addOne={addOne}
            subOne={subOne}
            resetCount={resetCount}
            count={count}
            title='Context Provider'
          />
        )
      }}
    </CounterContext.Consumer>
  )
}

export default ContextCounter
