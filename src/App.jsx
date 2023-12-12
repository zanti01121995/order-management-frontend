import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
import Create from "./components/create/Create";
import FoodDetails from "./components/foodDetails/foodDetails";
import FoodCatalog from "./components/foodCatalog/foodCatalog";

import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/foods/:id" element={<FoodCatalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
