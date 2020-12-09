import React, { useEffect, useState, useRef } from 'react';

function HookTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer} <br />
      <button onClick={() => clearInterval(interval)}>Clear hook timer</button>
    </div>
  );
}

export default HookTimer;
