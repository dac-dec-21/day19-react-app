import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [validationError, setValidationError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [userList, setUserList] = useState([]);

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
    if (username == "" || password == "" || email == "" || mobile == "") {
      setValidationError(true);
      return;
    }

    const user = {
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    };
    const newList = [user, ...userList];
    setUserList(newList);

    // Clear in the End
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");

    setValidationError(false);
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
          className={
            username == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={handlePassword}
          className={
            password == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
          className={
            email == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={handleMobile}
          className={
            mobile == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input type="button" value="Register" onClick={registerUser} />
      </div>

      <hr />
      {userList.map((item, index) => (
        <div key={index}>
          {item.username}, {item.password}, {item.email}, {item.mobile}
        </div>
      ))}
    </div>
  );
}
