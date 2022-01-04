import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let counter = 1;

  const increment = () => {
    counter = counter + 1;
    console.log("Increment Callled", counter);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <div>Like {counter} </div>
      <input type="button" value="Like Me" onClick={increment} />
    </div>
  );
}
