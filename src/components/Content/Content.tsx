import { Component, Fragment } from "react";
import Customer from "../Customer";

export default class Content extends Component {
  render() {
    return (
      //Fragment
      <>
        <div className="flex justify-center items-center h-screen">
          <Customer />
        </div>
        <h1></h1>
      </>
    );
  }
}
