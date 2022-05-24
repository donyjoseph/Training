import "./styles/EStyle.css";
function EditProduct() {
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
              <div>
                <lable>
                  <h4>Edit Name</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>Edit Rate</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>Edit GST</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <button className="btn1">Edit Product</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProduct;
