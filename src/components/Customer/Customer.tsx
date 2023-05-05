import { Component } from "react";

type CustomerProps = {
  _id: string;
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
      <tr>
        <td>{this.props._id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.address}</td>
        <td>{this.props.salary}</td>
      </tr>
    );
  }
}
