import React, { useState, useEffect } from 'react';

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  //Didmount equivalent
  useEffect(() => {
    console.log('useEffect called!');
    window.addEventListener('mousemove', logMousePosition);

    //Will unmount equivalent
    return () => {
      console.log('Component unmouting code');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X : {x} Y : {y}
    </div>
  );
};

export default HookMouse;
