import { Profiler, useEffect, useState } from "react";
import "./styles/EStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Productlist from "./Productlist";
function EditProduct() {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [ProdName, setProdName] = useState("");
  const [ProdPrice, setProdPrice] = useState("");
  const [errordisplay, setErrorDisplay] = useState("");
  const [ProdGst, setProdGst] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setProdName(e.target.value);
  };
  const PonChange = (e) => {
    e.preventDefault();
    setProdPrice(e.target.value);
  };
  const GstonChange = (e) => {
    e.preventDefault();
    setProdGst(e.target.value);
  };
  const navigate = useNavigate();
  function productlink() {
    console.log("worked");
    navigate("/Productlist");
  }
  useEffect(() => {
    setId(localStorage.getItem("itemforedit"));
    console.log("id"+id)
    const editUrl = "http://localhost:5000/editfetch";
    const request = {};
    const header = {};
    axios
      .post(editUrl, request, header)
      .then((res) => {
        console.log(res.data[0])
        console.log(res.data[0].id)
        setProdName(res.data[0].txtProdName)
        setProdPrice(res.data[0].txtProdPrice)
        setProdGst(res.data[0].txtGst)
      })
      .catch((err) => {});
  },[]);

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
          <button className="btn1" onClick={productlink} >Save</button>
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
                value={ProdName}
                onChange={(e) => {
                  onChange(e);
                }} className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>ProductRate</h4>
                </lable>
                <input
                value={ProdPrice}
                onChange={(e) => {
                  PonChange(e);
                }} className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>GST</h4>
                </lable>
                <input
                value={ProdGst}
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
