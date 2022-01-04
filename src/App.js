import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id = 1;
  const msg = "Hello World, How are you?";
  const btnMsg = "Click Me!!!";

  const hello = () => {
    console.log("Click me! Function Called!");
    alert("Thank you");
  };

  return (
    <div>
      <div id={id}>{msg}</div>

      <input type="button" value={btnMsg} onClick={hello} />
    </div>
  );
}
