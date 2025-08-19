import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useDispatch } from "react-redux";
// import { setUser } from "../Apps/Reducers/UserSlice";

function Layout() {
// const dispatch = useDispatch();

// const handleSetUser = () => {
//     dispatch(
//       setUser({
//         userName: "Surajan",
//         role: "Buyer",
//         email: "surajan@nea.com",
//       })
//     );
//   };
  return (
    <>
      <Header />
        {/* <div className="flex justify-center my-4">
        <button
          onClick={handleSetUser}
          className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Set User
        </button>
      </div> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
