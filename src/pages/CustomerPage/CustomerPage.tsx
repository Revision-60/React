import React, { ChangeEvent, Component } from "react";
import Customer from "../../components/Customer/Customer";
import axios from "../../axios";

type CustomerDetail = {
  _id: string;
  name: string;
  address: string;
  salary: number;
};

type CustomerProps = {};
type CustomerState = {
  customerList: CustomerDetail[];
  name: string;
  address: string;
  salary: number;
};

export default class CustomerPage extends Component<
  CustomerProps,
  CustomerState
> {
  constructor(props: CustomerProps) {
    super(props);
    this.state = {
      customerList: [],
      name: "",
      address: "",
      salary: 0,
    };
  }

  componentDidMount(): void {
    this.getAllCustomers();
  }

  getAllCustomers = () => {
    axios.get("customer").then((res) => {
      console.log(res.data.responseData);
      this.setState((prevState) => ({
        ...prevState,
        customerList: res.data.responseData,
      }));
    });
  };

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const inputValue = type === "number" ? parseInt(value) : value;

    if (name == "salary" && Number(inputValue) < 0) {
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, address, salary } = this.state;
    let newCustomer = {
      name: name,
      address: address,
      salary: salary,
    };

    axios.post("customer", newCustomer).then((res) => {
      //   this.setState((prevState) => ({
      //     customerList: [...prevState.customerList, res.data.responseData],
      //   }));
      this.getAllCustomers();
    });
  };

  render() {
    return (
      <div>
        <table className="w-full mt-20 text-lg">
          <thead>
            <tr>
              <td>Customer Id</td>
              <td>Customer Name</td>
              <td>Address</td>
              <td>Salary</td>
            </tr>
          </thead>
          <tbody>
            {this.state.customerList.map((customer) => (
              <Customer
                key={customer._id}
                _id={customer._id}
                name={customer.name}
                address={customer.address}
                salary={customer.salary}
              />
            ))}
          </tbody>
        </table>
        <form
          onSubmit={this.handleSubmit}
          className="text-5xl mt-32 grid grid-cols-1 px-32"
        >
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Customer Name"
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="address"
            value={this.state.address}
            placeholder="Address"
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="salary"
            value={this.state.salary}
            placeholder="Salary"
            onChange={this.handleInput}
          />
          <button type="submit" className="bg-slate-500">
            Save Customer
          </button>
        </form>
      </div>
    );
  }
}
