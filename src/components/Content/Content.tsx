import { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Counter from "../Counter";
import Customer from "../Customer";

export default class Content extends Component {
  render() {
    return (
      //Fragment
      <>
        <div className="flex justify-center items-center h-screen">
          {/* <Customer
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

          <Counter {...{ initValue: 95 }} />
          <Counter {...{ initValue: 5 }} /> */}
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </>
    );
  }
}
