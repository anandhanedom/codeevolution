import React, { useReducer } from 'react';

const INITAL_STATE = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstCounter: state.firstCounter + action.payload };

    case 'decrement1':
      return { ...state, firstCounter: state.firstCounter - action.payload };

    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.payload };

    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.payload };

    case 'reset':
      return INITAL_STATE;

    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, INITAL_STATE);

  return (
    <div>
      <div>Count1 = {count.firstCounter}</div>
      <div>Count2 = {count.secondCounter}</div>
      {/* Counter 1 */}
      <button onClick={() => dispatch({ type: 'increment1', payload: 1 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: 'decrement1', payload: 1 })}>
        Decrement1
      </button>
      {/* Counter 2 */}
      <button onClick={() => dispatch({ type: 'increment2', payload: 5 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', payload: 5 })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
