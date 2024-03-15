import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartIcon({ cart }) {
  return (
    <div>
      <div className="relative">
        <FaShoppingCart className="text-2xl" />
        <span className="bg-red-500 absolute text-xs -top-2 -right-4 rounded-full text-white flex w-5 h-5 flex justify-center items-center">
          {cart.length}
        </span>
      </div>
    </div>
  );
}

export default CartIcon;
