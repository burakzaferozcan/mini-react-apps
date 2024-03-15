import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import productData from "./productData";
import Asd from "./components/Asd";

function App() {
  const [cart, setCart] = useState([]);
  const emptyCart = (e) => {
    e.preventDefault();
    setCart([]);
  };
  return (
    <div className="container mx-auto p-4">
      <Header cart={cart} />
      <Products cart={cart} setCart={setCart} />

      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;
