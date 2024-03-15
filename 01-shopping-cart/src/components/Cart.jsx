import React from "react";

function Cart({ cart, emptyCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  if (cart.length === 0) return;
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">sepet</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i} className="mt-2 flex justify-between">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">toplam : {total}</p>
      <button
        onClick={emptyCart}
        className="bg-red-500 mt-4 text-white px-4 rounded py-2 w-full hover:bg-red-600"
      >
        sepeti boşalt
      </button>
    </div>
  );
}

export default Cart;
