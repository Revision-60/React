import { type } from "os";
import React, { Component } from "react";

type CounterProps = {
  initValue: number;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: this.props.initValue,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="h-80 bg-slate-900 px-40 text-white border flex justify-center items-center flex-col gap-6 rounded-lg">
        <h1>{this.state.count}</h1>
        <section className="flex gap-6">
          <button
            className="text-4xl border-2 w-12 h-12 rounded-lg"
            onClick={this.decreaseCount}
          >
            -
          </button>
          <button
            className="text-4xl border-2 w-12 h-12 rounded-lg"
            onClick={this.increaseCount}
          >
            +
          </button>
        </section>
      </div>
    );
  }
}
