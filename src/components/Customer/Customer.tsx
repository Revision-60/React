import React, { Component } from "react";

export default class Customer extends Component {
  render() {
    return (
      <div className="h-80 bg-slate-900 px-40 text-white border flex justify-center items-center flex-col gap-6 rounded-lg">
        <h1>C001</h1>
        <h1>Dasun</h1>
        <h1>Galle</h1>
        <h1>10000.00</h1>
      </div>
    );
  }
}
