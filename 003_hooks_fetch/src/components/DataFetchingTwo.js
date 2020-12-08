import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: '',
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        post: {},
        error: 'Something went wrong',
      };

    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div>
      <h1>{state.loading ? 'Loading...' : state.post.title}</h1>
      <h1>{state.error ? state.error : null}</h1>
    </div>
  );
};

export default DataFetchingTwo;
