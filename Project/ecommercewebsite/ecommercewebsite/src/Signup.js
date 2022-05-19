import "./styles/sstyle.css";
function Signup() {
  return (
    
    <div className="form">
      <img src="img/logo.png"></img>
      <h1>Log in</h1>
      <p>Continue to Shopify</p>
      <div className="input-container">
        <input type="text" placeholder="Email" className="text-input" required />
        <input type="password" placeholder="Password" className="text-input"           required />
        </div>
      <div className="button-container">
        <button className="btn1">Submit</button>
        </div>
        <div><p>New to Shopify?Get Started</p></div>
        <a href="btn">Help</a>
        <a href="btn">Help</a>
        <a href="btn">Help</a>
    </div>
  );
}

export default LoginPage;