// Define some redux actions
export function add() {
  return ({
    type: 'ADD_ONE',
  })
}

export function sub() {
  return ({
    type: 'SUB_ONE',
  })
}

export function reset() {
  return ({
    type: 'RESET_COUNT',
  })
}
