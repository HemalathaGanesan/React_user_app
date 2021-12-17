import { Route, Routes } from "react-router-dom";
import ProductsDetails from "./ProductsDetails";

const Welcome = () => {
  const p = <p style={{ color: "white" }}>welcome.. new wel user</p>;
  return (
    <section>
      <h2>Welcome to the page...!</h2>
      <Routes>
        <Route path='/welcome/user' element={<ProductsDetails />}></Route>
      </Routes>
    </section>
  );
};

export default Welcome;
