import React, { useState, useEffect } from 'react';

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
    </div>
  );
};

export default HookCounterOne;
