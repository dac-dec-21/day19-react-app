import axios from "axios";
import { useEffect, useState } from "react";

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
  const [list, setList] = useState([]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const addUser = async () => {
    if (username == "" || password == "") {
      alert("Vlidation fails");
      return;
    }

    const url = "http://localhost:4000/add-user";
    const data = {
      username: username,
      password: password,
    };

    // AJAX using AXIOS
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setUsername("");
    setPassword("");
  };

  const getUser1 = async () => {
    const url = "http://localhost:4000/users";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

  // LIke Constructor
  useEffect(() => getUser(), []);

  return (
    <div>
      <h2 className="bg-dark text-light p-3">User Registration</h2>
      <div>
        <input
          className="form-control form-control-lg mb-1"
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
          className="form-control form-control-lg mb-1"
          type="text"
          name=""
          id=""
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
      </div>
      <div>
        <input
          className="btn btn-secondary w-100"
          type="button"
          name=""
          value="Register"
          onClick={addUser}
        />
      </div>

      <h3 className="bg-dark text-light mt-1 p-3">User List</h3>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary fs-4">
          {item.username} {item.password}
        </div>
      ))}
    </div>
  );
}
