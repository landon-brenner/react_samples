// Counter example using global Redux store
import React from 'react';
import { connect } from 'react-redux'

import { add, sub, reset } from './store/actions';
import Display from './display';

const ReduxCounter = ({
  addOne,
  subOne,
  resetCount,
  count
}) => {
  return(
    <Display
      addOne={addOne}
      subOne={subOne}
      resetCount={resetCount}
      count={count}
      title="Global State (Redux)"
    />
  )
}

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = {
  addOne: add,
  subOne: sub,
  resetCount: reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
