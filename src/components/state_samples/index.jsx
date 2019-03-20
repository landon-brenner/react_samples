// functional container for rendering each state management example
// Redux store created here, though normally would live in root component
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import count from './store/reducers';

import LocalCounter from './local_counter';
import HooksCounter from './hooks_counter';
import ContextCounter from './context_counter/';
import ReduxCounter from './redux_counter';

const store = createStore(count)

const StateSamples = () => {
  return (
    <Provider store={store}>
      <LocalCounter />
      <HooksCounter />
      <ReduxCounter />
      <ContextCounter />
    </Provider>
  )
}

export default StateSamples
