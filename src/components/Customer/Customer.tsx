import { Component } from "react";

type CustomerProps = {
  id: string;
  name: string;
  address: string;
  salary: number;
};

export default class Customer extends Component<CustomerProps> {
  constructor(props: CustomerProps) {
    super(props);
  }
  render() {
    return (
      <div
        className="h-80 bg-slate-900 px-40 text-white border 
      flex justify-center items-center flex-col gap-6 rounded-lg"
      >
        <h1>{this.props.id}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.address}</h1>
        <h1>{this.props.salary}</h1>
      </div>
    );
  }
}
