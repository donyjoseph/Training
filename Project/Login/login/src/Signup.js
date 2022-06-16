import "./style.css";
import { useState } from "react";
import axios from "axios";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const passwordhandleChange = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
  };
  function Handleclick() {
    const url = "http://localhost:5000/addproduct";
    const request = { Username: username, Password: password };
    console.log("Username :" + JSON.stringify(username));
    console.log("Password :" + JSON.stringify(password));
    const header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        if (res.data.insertId > 0) {
          console.log("Data inserted");
        } else {
        }
      })
      .catch((err) => {});
  }
  return (
    <div class="outer2">
      <div class="col3">
        <div className="theme">
          {" "}
          <h4>Themify</h4>
        </div>
        <div className="input-container2">
          <div className="password">Username</div>
          <input
            value={username}
            onChange={(e) => {
              handleChange(e);
            }}
            input
            type="text"
            placeholder="username"
            className="text-input1"
            required
          />
          <div className="password">Password</div>
          <input
            value={password}
            onChange={(e) => {
              passwordhandleChange(e);
            }}
            input
            type="text"
            placeholder="Password"
            className="text-input1"
            required
          />
          <div className="forget">Forgetten password?</div>
          <input type="checkbox" value="love" />
          <span className="rem1">Remember me </span>
          <div className="btn55" onClick={Handleclick}>
            <botton>
              <div className="log">LOG IN</div>
            </botton>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
