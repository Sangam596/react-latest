import { useState } from 'react';
import { createRoot } from 'react-dom/client';


document.body.innerHTML = '<div id="root"> <div/>';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);