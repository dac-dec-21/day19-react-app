import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [list] = useState(["Hello Worldddd"]);

  return (
    <div>
      <h1>Working with Input Element</h1>

      <input type="button" value="Tweet to Everyone" />

      <div id="parent">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
