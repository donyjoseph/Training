import "./style.css";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [errordisplay, setErrorDisplay]=useState("")
  const handlechange=(e)=>{
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
      (JSON.stringify(res.data.length));
      if(res.data.length>0){
        console.log("success")
      }
      else{("error")
    }

    


    //console.log("txtusername :" + c);
    //console.log("txtpassword :" + JSON.stringify(password));
  
    // if(res.data.length>0){
        //console.log(res.data)
      //}else{
       // console.log("error")
     // }
     }).catch((err)=>{

    });
    }
  return (
    <div class="outer">
    <div class="col1">
    <h1>Login</h1>
      <h2 className="ph">See your growth and get consulting support!</h2>
      <div className="email">Email</div>
      < div className="input-container">
      <input
          value={username}
          onChange={(e) => {
            handleChange(e);
          }}
       input type="text"
          placeholder="username"
          className="text-input"
          required
        />
        <div className="password">Password</div>
        <div>{setErrorDisplay}</div>
        <input
          value={password}
          onChange={(e) => {
            passwordhandleChange(e);
          }}
        input type="text"
          placeholder="Password"
          className="text-input"
          required
        />
        <div>
        <input
              type="checkbox"
              value="love"
            />
        <span className="rem">Remember me </span>
        <label>{errordisplay}</label>
        
        <span className="pass">Forget Password? </span></div> 
        <div><button className="btn1" onClick={Handleclick}>submit</button></div>
        <div className="not">Not registered yet?<span className="spn1">Create an Account</span></div>
        <p className="felix">@2020 Felix All rights reserved</p>
        </div>
      
    </div>
    <div class="col2">
   <label className="str"> Turn your ideas into reality
   </label>
   </div>
  </div>
);
}
export default Login;
