import React, { useReducer, createContext } from 'react';
import './App.css';

// A B C
//   D E
//     F

//Components
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import ComponentC from './components/componentC';

//Contexts
export const CountContext = createContext();

const INITIAL_STATE = 0;

const reducer = (state, action) => {
  switch (action) {
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

const App = () => {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count = {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
};

export default App;
