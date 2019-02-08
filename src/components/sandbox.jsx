// A simple sandboxy component for showing console outputs of common JS examples
import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import { twoSum, fizzBuzz } from '../helpers/fizzbuzz';

class Sandbox extends Component {

  state = {
    array: [2, 7, 9, 10, 14, 15],
    target: 16,
  }

  componentDidMount() {
    const fbArr = fizzBuzz(100)
    console.log(...fbArr)

    const {array, target} = this.state
    const twoSumArr = twoSum(array, target)
    console.log(...twoSumArr)
  }


  render() {
    return (
      <>
        <Typography>Hi Sandbox</Typography>
      </>
    )
  }
}

export default Sandbox
