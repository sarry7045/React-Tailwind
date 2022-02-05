import React from "react";
import Searchbar from "../../Components/SearchBar.jsx";
import { useNavigate, Link, Outlet } from "react-router-dom";

function FacebookClone() {
  const naviGate = useNavigate();
  return (
    <>
      <div className="container-fluid mt-14 h-auto mb-20 flex mx-auto bg-gray-100 items-center justify-center">
        <div className="left w-1/3 mx-14">
          <img className="w-80" src="./Images/fb.png" alt="Image" />
          <p className="text-3xl mx-8">
            Facebook Helps You Connect and Share with the Pepole in Life.
          </p>
        </div>
        <div className="right flex flex-col bg-white p-8 rounded-lg w-1/4 text-lg relative">
          <input
            className="px-4 h-12 my-2 border-gray-200 border-1 border rounded-lg outline-blue-600"
            type="text"
            placeholder="Email Address or Phone Number"
          />
          <input
            className="px-4 h-12 my-2 border-gray-200 border-1 border rounded-lg outline-blue-600"
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-wite my-2 py-3 rounded-md font-bold ">
            {" "}
            Log In
          </button>
          <span className="text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline">
            Forgotten Password?
          </span>
          <hr className="my-2" />
          <button className="bg-green-600 hover:bg-green-700 text-wite my-2 py-3 rounded-md font-bold w-fit px-4 mx-auto">
            Create New Account
          </button>
          <span className="absolute -bottom-10 text-sm">
            {" "}
            <sapn className="font-bold hover:underline cursor-pointer">
              {" "}
              Create a Page{" "}
            </sapn>
            for a Celebrity, Brand or Business.
          </span>
        </div>
      </div>

      <div className="mt-40 text-justify justify-center">
        <Searchbar />

        <button
          onClick={() => naviGate(-1)}
          className="bg-blue-600  hover:bg-blue-800 mt-10  text-white px-3 py-2 rounded-xl mx-4  hover:bg-purple-600"
        >
          UseNavigate
        </button>
        <Link
          to="memorygame"
          className="bg-blue-600  hover:bg-blue-800 mt-10  text-white px-3 py-2 rounded-xl mx-4  hover:bg-purple-600"
        >
          Outlet
        </Link>
        <Link
          to="temporary"
          className="bg-blue-600  hover:bg-blue-800 mt-10  text-white px-3 py-2 rounded-xl mx-4  hover:bg-purple-600"
        >
          Outlet
        </Link>

        <Outlet />
      </div>
    </>
  );
}

export default FacebookClone;
