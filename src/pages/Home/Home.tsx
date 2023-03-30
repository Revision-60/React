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
        {
          id: "S002",
          name: "Ashan",
          address: "Galle",
          subjects: ["Bio", "English"],
        },
        {
          id: "S003",
          name: "Sithum",
          address: "Galle",
          subjects: ["Tech", "Commerce"],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.students.map((student) => (
          <Student
            id={student.id}
            name={student.name}
            address={student.address}
            subjects={student.subjects}
          />
        ))}
      </div>
    );
  }
}
