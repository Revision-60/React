import Customer from "../../components/Customer";
import axios from "../../axios";
import { useEffect, useState } from "react";

type CustomerDetail = {
  _id: string;
  name: string;
  address: string;
  salary: number;
};

const CustomerPage1 = () => {
  const [customerList, setCustomerList] = useState<CustomerDetail[]>([]);

  const getAllCustomer = () => {
    axios
      .get("customer")
      .then((res) => {
        setCustomerList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllCustomer();
  }, []);

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
          {customerList.map((customer) => (
            <Customer
              _id={customer._id}
              name={customer.name}
              address={customer.address}
              salary={customer.salary}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPage1;
