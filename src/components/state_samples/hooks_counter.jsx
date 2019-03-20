// Functional counter component using React hooks to manage state
import React, { useState } from 'react';

import Display from './display';

const HooksCounter = () => {
  const [count, setCount] = useState(0)
  const addOne = () => setCount(prevCount => prevCount + 1)
  const subOne = count !== 0 ?
    () => setCount(prevCount => prevCount - 1) : null
  const resetCount = () => setCount(0)

  return (
    <Display
      addOne={addOne}
      subOne={subOne}
      resetCount={resetCount}
      count={count}
      title="Local State (hooks)"
    />
  )
}

export default HooksCounter
