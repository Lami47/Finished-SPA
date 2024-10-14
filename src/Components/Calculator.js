import React, { useState } from 'react';
// import Menu from '../menu';
import './Calculator.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(count * 0);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0){
    setCount(count - 1);
    }
  };
  // const cost = count * price
  // const menu = Menu.id
  // const total = count * menu.price

  return (
    <>
      <div className='calcGrid1'>
        <button className='item1' onClick={reset} style={{ margin: '10px', padding: '10px' }}>
          Reset
        </button>
        <button className='item2' onClick={decrement} style={{ margin: '10px', padding: '10px' }}>
          -1
        </button>
        <button className='item3' onClick={increment} style={{ margin: '10px', padding: '10px' }}>
          +1
        </button>
      </div>
      <div>
      <h2><em>Total Platters: </em> {count}</h2>
      {/* <h1> Total cost: {cost}</h1> */}
      <div className='calcGrid2'>
        <div className='grid2-item1'>
          <button>Save</button>
        </div>
        <div className='grid2-item2'>
          <button> Add to cart</button>
        </div>      
      </div> 
      </div>
      {/* <div>
        Total: {total}
      </div> */}
    </>
  );
};

export default Counter;
