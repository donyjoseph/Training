import { Profiler, useEffect, useState } from "react";
import "./styles/EStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function EditProduct() {
  const [id, setId] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductRate, setProductRate] = useState("");
  const [errordisplay, setErrorDisplay] = useState("");
  const [Gst, setGst] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setProductName(e.target.value);
  };
  const PonChange = (e) => {
    e.preventDefault();
    setProductRate(e.target.value);
  };
  const GstonChange = (e) => {
    e.preventDefault();
    setGst(e.target.value);
  };
  const navigate = useNavigate();
  function productLink() {
    console.log("worked");
    navigate("/AddProduct");
  }
  useEffect(() => {
    setId(localStorage.getItem("itemforedit"));
    const url = "http://localhost:5000/productfetch";
    const request = {};
    const header = {};
    axios
      .post(url, request, header)
      .then((res) => {
    console.log("ProductName :" + JSON.stringify(ProductName));
    console.log("ProductRate :" + JSON.stringify(ProductRate));
    console.log("Gst :" + JSON.stringify(Gst));
        console.log(res.data);
        if (res.data.insertId ) {
          navigate("/productlist");
        } else {
          setErrorDisplay("Error");
        }
      })
      .catch((err) => {});
  });

  return (
      <div>
      <div className="usericon">
        <h5 className="user">User</h5>
      </div>
      <div className="outer">
        IdCame:{id}
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
          <button className="btn1" onClick={productLink} >Save</button>
          <label>{errordisplay}</label>
            <div className="buttonright">
              <label>EditProduct</label>
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
export default EditProduct;
