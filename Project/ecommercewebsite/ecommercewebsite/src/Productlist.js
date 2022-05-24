import "./styles/pstyles.css";
function Productlist() {
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
            <button className="btn1">ADD NEW</button>
              <table className="tblData">
                <thead>
                  <th>Dress</th>
                  <th>Eletronics</th>
                  <th>Sports</th>
                  <th>Kids</th>
                </thead>
                <tbody>
                  <tr className="trow">
                    <td>Pants</td>
                    <td>Tv</td>
                    <td>Bat</td>
                    <td>Toys</td>
                  </tr>
                  <tr className="trow">
                    <td>Shirt</td>
                    <td>Laptop</td>
                    <td>Ball</td>
                    <td>Games</td>
                  </tr>
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
