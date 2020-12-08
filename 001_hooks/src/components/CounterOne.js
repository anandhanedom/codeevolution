import React, { useReducer } from 'react';

const INITIAL_STATE = 0;

const reducer = (state, action) => {
  switch (action.payload) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    case 'reset':
      return INITIAL_STATE;

    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default CounterOne;
