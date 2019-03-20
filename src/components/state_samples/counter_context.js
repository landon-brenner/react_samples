import React from 'react';

const CounterContext = React.createContext({
  addOne(){},
  subOne(){},
  resetCount(){},
  counter: 0,
});

export default CounterContext;
