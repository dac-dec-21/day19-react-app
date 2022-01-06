import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const addUser = () => {
    console.log(username, password);
  };

  return (
    <div>
      <h1>User Registration</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter Username"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
      </div>
      <div>
        <input type="button" name="" value="Register" onClick={addUser} />
      </div>
    </div>
  );
}
