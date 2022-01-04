import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("Tweet here...");
  const [list, setList] = useState([]);

  const tweetHere = () => {
    const newList = [message, ...list];

    // UI RERENDER :: innerHTML
    setList(newList);
    setMessage("");
  };

  const changeMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  const deleteTweet = () => {
    list.splice(0, 1);
    setList([...list]);
  };

  return (
    <div>
      <h1>Working with Input Element</h1>

      {/** INPUT BOX */}
      <input type="text" value={message} onChange={changeMessage} />

      <input type="button" value="Tweet to Everyone" onClick={tweetHere} />
      <input type="button" value="Tweet to Everyone" onClick={deleteTweet} />

      <div id="parent">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
