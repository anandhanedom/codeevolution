### Rules of Hooks:

1. Don't call hooks inside loops,conditions,or nested functions.
2. Only call hooks from react functions.

### useState:

1. Add state to functional components.
2. Make sure to spread your state variable and then call the setter function.

### useEffect:

1. Lets you perform side effects in functional components.
2. Its a close replacement for componentWillMount,componentDidUpdate & componentWillUnmount.

### useContext:

1. Provides a way to pass data through the component tree without having to pass props down manually at every level.

### useReducer:

1. A hook for state management.
2. Alternative to useState.
3. useState is built using useReducer.
4. useReducer(reducer,initialState)
5. When to use?

### useReducer with useContext:

1. useReducer - local state management
2. Share state betweeen components - Global state management
3. useReducer + useContext

### HOOKS SO FAR:

useState - state
useEffect - side effects
useContext - context API
useReducer - reducer

### useCallback Hook:

1. A hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
2. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

### When you want to cache function - useCallback, when you need to cache the result of a function - useMemo
