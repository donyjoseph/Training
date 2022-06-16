import { useEffect, useState } from "react";
import "./styles/pstyles.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Productlist() {
const [array, setArray] = useState([ 
   ]);
const navigate = useNavigate()
function productLink(){
  console.log('worked')  
}
function RowClick(e, rowid){
  localStorage.setItem("itemforedit",rowid ) 
  navigate('/EditProduct')
  e.preventDefault(); 
}
  useEffect(() => {
    const url = "http://localhost:5000/productfetch";
    const request = {};
    const header = {};
    axios
     .post(url, request, header)
     .then((res) => {
      setArray(res.data);
       console.log(res.data);
     })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className="usericonlist">
        <h5>User</h5>
      </div>
      <div className="firstrow"></div>
      <div className="secondrow">
        {/* Side navigation menu */}
        <div className="firstcolumn">
          <nav className="navbar-background">
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
            <button className="btn1" onClick={productLink}>Add New</button>
            <table className="tblNew" cellPadding="0" cellspacing="0">
              <thead>
                <th>Id</th>
                <th>ProductName</th>
                <th>ProductPrice</th>
                <th>Gst</th>
              </thead>
              <tbody>
               {array.map((itm,num)=>{
                 return <tr  onClick={(e)=>{RowClick(e,itm.id)}}>
                   <td>{itm.id}</td>
                   <td>{itm.ProdName}</td>
                   <td>{itm.ProdPrice}</td>
                   <td>{itm.ProdGst}</td>
                   </tr>
                   })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productlist;
