import "./styles/EStyle.css";
import axios from "axios";
import { useState } from "react";
function EditProduct() {
  const [EditName, setEditName] = useState("10");
  const [EditRate, setEditRate] = useState("22");
  const [EditGST, setEditGST] =   useState("33");
  const handleChange = (e) => {
    e.preventDefault();
    setEditName(e.target.value);
  };
  const SetEditRatehandleChange = (e) => {
    e.preventDefault();
    setEditRate(e.target.value);
  };
  const setGSThandleChange = (e) => {
    e.preventDefault();
    setEditGST(e.target.value);
  };
  function apiCall() {

    const url="http://localhost:5000/productfetch";
    const request={"EditName":setEditName,"EditRate":setEditRate,"EditGST":setEditGST};
    const header={}
    axios.post(url,request, header).then((res)=>{
    console.log("EditName :" + JSON.stringify(setEditName));
    console.log("EditRate :" + JSON.stringify(setEditRate));
    console.log("EditGST :" + JSON.stringify(setEditGST));
}).catch((err)=>{

    });
  }
  
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow"></div>
        <div className="secondrow">
          {/* Side navigation menu */}
          <div className="firstcolumn">
            <nav>
              <li>Home</li>
              <li>Products</li>
              <li>Order</li>
              <li>Logout</li>
            </nav>
          </div>

           {/* Main outline */}
           <div className="secondcolumn">
            <div className="buttonright">
              <label>AddProduct</label>
            </div>
            <div className="seccolumsecondrow">
              <div>
                <lable>
                  <h4>ProductName</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>ProductRate</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>GST</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <button className="btn1">AddProduct</button>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProduct;
