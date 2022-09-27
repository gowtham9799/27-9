import React from "react";
import Login from "./Login";
import Navcard from "./Navcard";
import Profile from "./Profile";
import { Outlet, Link } from "react-router-dom";
import Card from "./Card";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Contact from "./Contact";
function Nav() {
  return (
    <>
      {" "}
      <div target="blank" className="w-full h-24 bg-gray-900 fixed z-10 border-b-2 border-white ">
      <Contact className="" />
      <div className=" flex-col w-full ml-32">
          <Login />
          <Navcard />
          <Profile />
      </div>
        <Link to={"./Card"} className="bg-white px-6  m-4  absolute ">Card </Link>
        <Link to={"/"} className="bg-white px-6  m-12  absolute ">go back </Link>
        </div>
    </>
  );
}

export default Nav;
