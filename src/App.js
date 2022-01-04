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
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const registerUser = () => {
    // alert(`${username} ${password} ${email} ${mobile}`);
    // TODO  MAKE AJAX CALL
    // THERE IS NO DOM
  };

  return (
    <div>
      <h1>Working with Registration</h1>
      <div>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={handleMobile}
        />
      </div>
      <div>
        <input type="button" value="Register" onClick={registerUser} />
      </div>
    </div>
  );
}
