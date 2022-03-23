import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Routes/App";
import ShoppingCart from "./Routes/ShoppingCart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;