import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [list, setList] = useState(["Hello Worldddd"]);

  const tweetHere = () => {
    const newList = [...list, "Hello Universe"];

    // UI RERENDER :: innerHTML
    setList(newList);
  };

  const deleteFirstTweet = () => {
    list.splice(0, 1);

    const newList = [...list];
    setList(newList);
  };

  return (
    <div>
      <h1>Working with Input Element</h1>

      <input type="button" value="Tweet to Everyone" onClick={tweetHere} />
      <input
        type="button"
        value="Delete First Tweet"
        onClick={deleteFirstTweet}
      />

      <div id="parent">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
