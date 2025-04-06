import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [loginPop, setLoginPop] = useState(false);
  //.................
  const loginOpenHandler = () => {
    setLoginPop(true);
  };

  //...................
  const loginCloseHandler = () => {
    setLoginPop(false);
  };

  return (
    <>
      {loginPop && <LoginPopup loginHandler={loginCloseHandler} />}
      <div className="app">
        <NavBar loginHandler={loginOpenHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
