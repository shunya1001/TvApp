import React from "react";
// import logo from "../images/logo.png";
export default function App() {
    return (
      <div className="bg-black  h-20 py-2 px-4 flex w-screen">
        <div>
            <img src="./images/logo.png" alt="logo"/>
        </div>
        <div className="absolute right-4 py-3">
            <button className=" text-white rounded-md px-4 py-2 right-full hover: border hover: border-gray-50 hover:text-lg hover:border-2">Login</button>
        </div>
        {/*planets  */}
      </div>
    )
    
  }
