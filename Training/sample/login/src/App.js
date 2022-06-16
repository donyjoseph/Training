import "./style.css";
import { useState } from "react";
import axios from "axios";

function Login() {
const[username,setusername]= useState("")
const[password,setpassword]= useState("")

const MHandlechange=(e)=>{
  e.preventDefault();
  setusername(e.target.value);
 };
const PHandlechange=(e)=>{
  e.preventDefault();
  setpassword(e.target.value)
};
function Handleclick() {

  const url="http://localhost:5000/uservalidate";
  const request={"txtUsername":username,"txtPassword":password};
  const header={}
  axios.post(url,request, header).then((res)=>{
    (JSON.stringify(res.data.length));
    if(res.data.length>0){
      alert("success")
    }
    else{alert("error")
  }

  
   }).catch((err)=>{

    });
    }

  return(
    <div>
      <div className="outer2">
      <div className="col3">
      < div className="input-container">
      <h1>Login</h1>
      <input
          value={username}
          onChange={(e) => {
            MHandlechange(e);
          }}
       input type="text"
          placeholder="username"
          className="text-input"
          required
        />
        <input
          value={password}
          onChange={(e) => {
            PHandlechange(e);
          }}
       input type="text"
          placeholder="password"
          className="text-input"
          required
        />
        <div><button className="btn1" onClick={Handleclick}>submit</button></div>
      </div>
      </div>
      </div>
      </div>
  );
  }
  export default Login;
  









