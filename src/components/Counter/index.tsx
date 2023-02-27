import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={addOneHandler}>Add One</button>

      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};
