import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section className="bg-blue-900 w-full h-20 p-2.5 text-white fixed">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
            <h1 className="pl-6 text-3xl">LOGO</h1>
          </section>
          <section className="h-full w-1/2 flex items-center gap-6 justify-end text-lg">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Profile</a>
          </section>
        </div>
      </section>
    );
  }
}
