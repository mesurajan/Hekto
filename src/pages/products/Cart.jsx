// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../Apps/Reducers/cartSlice";
import EmptyCartImg from "../../assets/images/empty-cart.png";
import { Link } from "react-router-dom";
import AppBreadcrumbs from '../../components/Breadcrumbs';
function Cart() {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-white container text-[#0A174E] mb-15">
    <div className='bg-backgroundlite py-4'>
        <h1 className='text-3xl font-bold px-4'>Your Cart</h1>
        <AppBreadcrumbs />
      </div>

      {items.length === 0 ? (
         <div className="flex flex-col items-center justify-center py-20">
          <img
            src={EmptyCartImg}
            alt="Empty Cart"
            className="w-60 h-60 object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold text-[#0A174E] mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-4 text-center">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <Link
            to="/product"
            className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
          >
            Go Shopping
          </Link>
        </div>
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
