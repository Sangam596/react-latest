import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="root"></div>';

// React component
const Title =() =>(<h1>This is my react function component 🚀</h1>);
// React Element or JSX
const title =<h1>This is react element</h1>;

const Counter=() =>{
    const [count, setCount] = useState(0);
    return (
      <>
        <button onClick={() => setCount(count + 1)}>
          Increment The Counter
        </button>
        <h1 className="count"> Count : {count}</h1>
      </>
    );
  }

const AppLayout = ()=>  (
    <div>
     {title}
     <Title/> 
     <Counter/>

    </div>
);

const root = createRoot(document.getElementById('root'));

root.render(<AppLayout />);