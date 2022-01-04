import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let [msg, setMsg] = useState("Hellooo");

  const changeMessage = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <input
        className="w-100"
        type="text"
        name=""
        id=""
        value={msg}
        onChange={changeMessage}
      />

      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
    </div>
  );
}
