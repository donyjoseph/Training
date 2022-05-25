import "./styles/pstyles.css";
import { useState } from "react";
import axios from "axios";

function Productlist() {
  const [Productlist, setproductlist] = useState([
    { Id: "1", productName: "ABB", Rate: "100", Tax: "16" },
    { Id: "2", productName: "AAAC", Rate: "200", Tax: "12" },
    { Id: "3", productName: "AAAB", Rate: "300", Tax: "14" },
  ])
  function apiCall() {

    const url="http://localhost:5000/productlist";
    const header={}
    var request={}
    axios.post(url,request, header).then((res)=>{
    console.log(" :" + JSON.stringify());
    console.log(" :" + JSON.stringify());
      
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
          <label>
            {" "}
            <h1>Productlist</h1>
          </label>
          <div className="secondcolumn">
            <div className="buttonright"></div>
            <div className="seccolumsecondrow">
            <button className="btn1"onClick={apiCall}>ADD NEW</button>
              <table className="tblData">
                <thead>
                  <th>Id</th>
                  <th>productName</th>
                  <th>Rate</th>
                  <th>Tax</th>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productlist;
