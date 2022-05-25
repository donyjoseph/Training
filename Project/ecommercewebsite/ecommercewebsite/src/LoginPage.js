//import from "express";
import { useState } from "react";
import "./styles/style.css";
import axios from "axios";
import Navigation from "./Navigation";
import { useNavigate } from 'react-router-dom'
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [errordisplay, setErrorDisplay]=useState("")
  const navigate = useNavigate()
  

  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const passwordhandleChange = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
  };
  function Handleclick() {

    const url="http://localhost:5000/uservalidate";
    const request={"txtUsername":username,"txtPassword":password};
    

    const header={}
    axios.post(url,request, header).then((res)=>{
    console.log("username :" + JSON.stringify(username));
    console.log("password :" + JSON.stringify(password));
      //res.data
      //length>0
        //navigate
      //else
        //error
      if(res.data.length>0){
        navigate('/productlist')
      }else{
        setErrorDisplay("User not found")
      }
    }).catch((err)=>{

    });
    
  }

  return (
    <div className="form">
      <h1>Log in{password}</h1>
      <p>Continue to Shopify</p>
      <div className="input-container">
        <input
          value={username}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          placeholder="username"
          className="text-input"
          required
        />
        <input
          value={password}
          onChange={(e) => {
            passwordhandleChange(e);
          }}
          type="password"
          placeholder="Password"
          className="text-input"
          required
        />
      </div>
      <div className="button-container">
        <button className="btn1" onClick={Handleclick}>
          Submit
        </button>
      </div>
      <div>
        <label>{errordisplay}</label>
        <p>New to Shopify?Get Started</p>
        <a className="sts">Help</a>
        <a className="sts">Privacy</a>
        <a className="sts">Terms</a>
      </div>
    </div>
  );
}
export default LoginPage;
