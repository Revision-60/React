import { Component, Fragment } from "react";
import Counter from "../Counter";
import Customer from "../Customer";

export default class Content extends Component {
  render() {
    return (
      //Fragment
      <>
        <div className="flex justify-center items-center h-screen">
          <Customer
            {...{
              id: "C001",
              name: "Dasun",
              address: "Galle",
              salary: 10000.0,
            }}
          />

          <Customer
            {...{
              id: "C002",
              name: "John",
              address: "Colombo",
              salary: 20000.0,
            }}
          />

          <Counter {...{ initValue: 20 }} />
        </div>
        <h1></h1>
      </>
    );
  }
}
