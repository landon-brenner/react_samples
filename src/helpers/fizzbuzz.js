// Implementation of classic FizzBuzz using ES6 features and patterns
const fizzBuzz = n => {

  // Test conditions in a separate function
  const fbTest = t => {
    return (t % 3 === 0 && t % 5 === 0) ? "fizzbuzz"
      : (t % 3 === 0) ? "fizz"
      : (t % 5 === 0) ? "buzz"
      : t;
  };

  // Starting from 0, ending at n, test each integer and add to array
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(fbTest(i));
  }
  return arr;
};

// Two sum example (time compl O(n^2), space O(1))
// This method returns only first solution found, not all solutions
const twoSum = (arr, t) => {
  for (let i=0; i<=arr.length; i++) {
    for (let j=i+1; j<=arr.length; j++) {
      if (arr[i] + arr[j] === t) {
        return [arr[i],arr[j]]
      }
    }
  }
}

// Two sum function which will return ALL pairs in the array that sum to t
const twoSumHash = (arr, t) => {

  let sums = [];
  let hashTable = {};

  // check each element in array
  for (let i = 0; i < arr.length; i++) {

    // calculate S - current element
    const sumMinusElement = t - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];

  }

  // return all pairs of integers that sum to S
  return sums;

}

/* Example of a setTimeout function using closures
/  Closures
/  The var keyword is function-scoped, meaning it lies within an enclosing function.
/  Since there’s no function in this example, the enclosing scope is global. The for loop creates a global i variable.
/  Note as well that since var is function-scoped, i will be set to the closest enclosing function.
/  In this example, that would be the global scope.
/  Simple solution: use let instead of var, as it is block-scoped.
*/
const timeoutClosures = () => {
  for (let i = 1; i < 5; i++) {
      setTimeout(() => console.log(i), 1000)  // 1 2 3 4
  }
}


export { fizzBuzz, twoSum, twoSumHash, timeoutClosures };
