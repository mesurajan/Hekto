// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../Apps/Reducers/cartSlice";

function Cart() {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container py-10 bg-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded">
                <div className="flex items-center gap-4">
                  <img src={item.chairimage} alt={item.title} className="w-20 h-20 object-cover" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
            <button
              className="px-6 py-2 text-white bg-blue-900 rounded hover:bg-blue-800"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
