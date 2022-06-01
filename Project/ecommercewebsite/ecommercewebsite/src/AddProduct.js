import { useState } from "react";
import "./styles/AStyle.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
function AddProduct() {
  const[ProductName,setProductName]=useState("");
  const[ProductRate,setProductRate]=useState("");
  const[Gst,setGst]=useState("");
  const [errordisplay, setErrorDisplay]=useState("")
  const navigate = useNavigate("")
  const onChange= (e) => {
    e.preventDefault();
    setProductName(e.target.value);
    };
    const PonChange= (e) => {
      e.preventDefault();
      setProductRate(e.target.value);
      };
      const GstonChange= (e) => {
        e.preventDefault();
        setGst(e.target.value);
        };

        function handleclick() {
          var url = "http://localhost:5000/addProduct";
          var request = { txtProductName: ProductName, txtProductRate: ProductRate, txtGst: Gst };
          console.log("ProductName :" + JSON.stringify(ProductName));
          console.log("ProductRate :" + JSON.stringify(ProductRate));
          console.log("Gst :" + JSON.stringify(Gst));
          var header = {};
          axios
            .post(url, request, header)
            .then((res) => {
              console.log(res.data);
              if(res.data.insertId>0){
                navigate('/productlist')
              }else{
                setErrorDisplay("User not found")
              }
            }).catch((err)=>{
        
            });
            
         }
        return (
    <div>
      <div className="usericon">
        <h5 className="user">User</h5>
      </div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrowadd">
        </div>
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
          <button className="btn1" onClick={handleclick} >Save</button>
          <label>{errordisplay}</label>
            <div className="buttonright">
              <label>AddProduct</label>
            </div>
            <div className="seccolumsecondrow">
              <div>
                <lable>
                  <h4>ProductName</h4>
                  </lable>
                <input
                value={ProductName}
                onChange={(e) => {
                  onChange(e);
                }} className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>ProductRate</h4>
                </lable>
                <input
                value={ProductRate}
                onChange={(e) => {
                  PonChange(e);
                }} className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>GST</h4>
                </lable>
                <input
                value={Gst}
                onChange={(e) => {
                  GstonChange(e);
                }} className="titleinput" type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;