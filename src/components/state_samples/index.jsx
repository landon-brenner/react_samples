// functional container for rendering each state management example
import React from 'react';

import LocalCounter from './local_counter';
import HooksCounter from './hooks_counter';
import ContextCounter from './context_counter';

const StateSamples = () => {
  return (
    <>
      <LocalCounter />
      <HooksCounter />
      <ContextCounter />
    </>
  )
}

export default StateSamples
