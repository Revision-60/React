import { type } from "os";
import { Component } from "react";
import Student from "../../components/Student";

type StudentDetail = {
  id: string;
  name: string;
  address: string;
  subjects: string[];
};

type HomeProps = {};

type HomeState = {
  students: StudentDetail[];
};

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      students: [
        {
          id: "S001",
          name: "Gihan",
          address: "Matara",
          subjects: ["Maths", "Science"],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Student />
        <Student />
        <Student />
      </div>
    );
  }
}
