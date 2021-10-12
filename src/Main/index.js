import React, { useState, useEffect } from "react";


const Main = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Бєлка");
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    useEffect(() => {
        console.log(`Hi ${name} you clicked ${count} times`);
      }, [count,name]);
  
    return (
      <div>
        <p>
          Hi {name} you clicked {count} times
        </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setName(name === "Бєлка" ? "Стрєлка" : "Бєлка")}>
          Change name
        </button>
      </div>
    );
  };
  export default Main;