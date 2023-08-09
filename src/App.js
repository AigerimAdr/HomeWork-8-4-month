import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Previous count: {countRef.current}</p>
    </div>
  );
}

export default App;