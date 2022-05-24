import "./styles/style.css";
function LoginPage() {
  return (
    <div className="form">
      <h1>Log in</h1>
      <p>Continue to Shopify</p>
      <div className="input-container">
        <input type="text" placeholder="Email" className="text-input" required />
        <input type="password" placeholder="Password" className="text-input"required />
</div>
      <div className="button-container">
        <button className="btn1">Submit</button>
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
