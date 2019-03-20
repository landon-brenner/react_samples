// functional container for rendering each state management example
import React from 'react';

import LocalCounter from './local_counter';
import HooksCounter from './hooks_counter';

const StateSamples = () => {
  return (
    <>
      <LocalCounter />
      <HooksCounter />
    </>
  )
}

export default StateSamples
