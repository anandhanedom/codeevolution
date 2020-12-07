import React, { useReducer } from 'react';

const INITIAL_STATE = 0;

const reducer = (state = INITIAL_STATE, action) => {
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
  useReducer(reducer, initialState);

  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default CounterOne;
