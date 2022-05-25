import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import LoginPage from "./LoginPage";
import Productlist from "./Productlist";
import Signup from "./Signup";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
            {" "}
          </Route>
          <Route path="/Productlist" element={<Productlist />}>
            {" "}
          </Route>
          <Route path="/AddProduct" element={<AddProduct />}>
            {" "}
          </Route>
          <Route path="/EditProduct" element={<EditProduct/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;