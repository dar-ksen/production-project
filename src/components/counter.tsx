import React, { useState } from 'react';
import classes from './counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const onIncr = () => setCount(count + 1);
  const onDecr = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter</h1>
      <p>{ count }</p>
      <div>
        <button className={ classes.btn } onClick={ onIncr }>incr</button>
        <button className={ classes.btn } onClick={ onDecr }>decr</button>
      </div>
    </div>
  );
};

export default Counter;