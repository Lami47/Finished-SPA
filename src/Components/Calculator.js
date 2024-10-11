import React, { useState } from 'react';
import Menu from '../menu';

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
  const initial = 0
  const menu = Menu.id
  const total = count * menu.price

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
        Platter's: {initial}
      </div>
      <div>
        Total: {total}
      </div>
    </>
  );
};

export default Counter;
