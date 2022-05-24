import "./styles/pstyles.css";
function Productlist() {
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
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
            <div className="buttonright">
              <label>Edit Product</label>
            </div>
            <div className="seccolumsecondrow">
               <tbody>
                    <tr className="trow"><td>1</td>   <td>User1</td>  <td>ToDo</td>  <td>Api</td><td>Ecommerce</td></tr>
                    <tr className="trow"><td>2</td>   <td>User2</td>  <td>ToDo</td>  <td>Ui</td><td>Jira</td></tr>
                </tbody>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productlist;
