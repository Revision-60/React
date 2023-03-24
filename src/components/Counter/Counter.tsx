import { type } from "os";
import React, { Component } from "react";

type CounterProps = {
  initValue: number;
};

type counterState = {
  count: number;
};

export default class Counter extends Component<CounterProps> {
  render() {
    return <div>Counter</div>;
  }
}
