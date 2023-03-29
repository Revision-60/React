import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userImage from "../../assets/user.png";

export default class Header extends Component {
  render() {
    return (
      <section className="bg-blue-900 w-full h-20 p-2.5 text-white fixed">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
            <h1 className="pl-6 text-3xl">LOGO</h1>
          </section>
          <section className="h-full w-1/2 flex items-center gap-6 justify-end text-lg">
            <NavLink to={"/"}>Home</NavLink>

            <NavLink to={"/about"}>About</NavLink>

            <NavLink to={"/contact"}>Contact Us</NavLink>

            <NavLink to={"/"}>
              <img src={userImage} className="w-10 h-10" alt="" />
            </NavLink>
          </section>
        </div>
      </section>
    );
  }
}
