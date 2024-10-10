import React, { useState } from 'react';
import './Calculator.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0){
    setCount(count - 1);
    }
  };

  return (
    <>
      <div className='grid1'>
        <button onClick={increment} style={{ margin: '10px', padding: '10px' }}>
          Increment
        </button>
        <h1> Platter: {count}</h1>
        <button onClick={decrement} style={{ margin: '10px', padding: '10px' }}>
          Decrement
        </button>
      </div>
      <div>
        platter cost
      </div>
    </>
  );
};

export default Counter;
