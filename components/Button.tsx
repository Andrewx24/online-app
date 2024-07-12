'use client';
import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    if (count === -10) {
      setCount(0);
    }
  };

  return (
    <div>
      <h1>The count increases and decreases by 1</h1>
      <button className='btn'  onClick={handleIncrease}>Increase</button>
      <h1>{count}</h1>
      <button className='btn' onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Button;
