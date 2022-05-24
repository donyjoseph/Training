//import from "express";
import { useState } from "react";
import "./styles/style.css";
const axios = require('axios').default;
function LoginPage() {
  const [username,setUsername]=useState('cok')
  const [password,setpassword]=useState("david")
const handleChange=(e)=>{
  e.preventDefault();
  setUsername(e.target.value)
}
const passwordhandleChange=(e)=>{
  e.preventDefault();
  setpassword(e.target.value)
}
function apiCall() {
  return axios.get('http://localhost:5000/countryfetch');
}

  return (
    <div className="form">
      <h1>Log in{password}</h1>
      <p>Continue to Shopify</p>
      <div className="input-container">
        <input value={username} onChange={(e)=>{handleChange(e)}} type="text" placeholder="username" className="text-input" required />
        <input value={password}onChange={(e)=>{passwordhandleChange(e)}} type="password"placeholder="Password" className="text-input"required />
</div>
      <div className="button-container">
        <button className="btn1" onClick={apiCall} >Submit</button>
        </div>
        <div><p>New to Shopify?Get Started</p>
       <a className="sts">Help</a>
        <a className="sts">Privacy</a>
        <a className="sts">Terms</a>
        </div>
        </div>
  );
}
export default LoginPage;
