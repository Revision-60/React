import { ChangeEvent, Component } from "react";
import Student from "../../components/Student/Student";
import TextField from "@mui/material/TextField";

type StudentDetail = {
  studentId: string;
  name: string;
  address: string;
  subjects: string[];
};

type ProfileProps = {};
type ProfileState = {
  studentId: string;
  name: string;
  address: string;
  subjects: string;
  student: StudentDetail;
  studentList: StudentDetail[];
  isClickedAddButton: boolean;
};

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      studentId: "",
      name: "",
      address: "",
      subjects: "",
      student: { studentId: "", name: "", address: "", subjects: [] },
      isClickedAddButton: false,
      studentList: [
        {
          studentId: "S001",
          name: "Gihan",
          address: "Matara",
          subjects: ["Maths", "Science"],
        },
        {
          studentId: "S002",
          name: "Ashan",
          address: "Galle",
          subjects: ["Bio", "English"],
        },
        {
          studentId: "S003",
          name: "Sithum",
          address: "Galle",
          subjects: ["Tech", "Commerce"],
        },
      ],
    };
  }

  handleClickEvent = () => {
    this.setState((prevState) => ({
      ...prevState,
      isClickedAddButton: !prevState.isClickedAddButton,
    }));
  };

  saveStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { studentId, name, address, subjects } = this.state;
    let student: StudentDetail = {
      studentId: studentId,
      name: name,
      address: address,
      subjects: this.toArray(subjects),
    };

    this.setState((prevState) => ({
      ...prevState,
      studentList: [...prevState.studentList, student],
    }));
  };

  toArray = (subjectString: string): string[] => {
    if (subjectString != "") {
      return subjectString.split(",").map((sub) => sub.trim());
    }
    return [];
  };

  handleTypeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  render() {
    return (
      <section>
        <div className="mb-10 min-h-2/3">
          {this.state.isClickedAddButton ? (
            <>
              <section
                className="w-full h-20 bg-blue-900 text-white text-center text-2xl p-6"
                onClick={this.handleClickEvent}
              >
                Discart Student
              </section>
              <form
                className="flex flex-col space-y-3 w-full"
                onSubmit={this.saveStudent}
              >
                <TextField
                  label="Student ID"
                  type="text"
                  variant="outlined"
                  placeholder="Enter ID"
                  name="studentId"
                  fullWidth={true}
                  required
                  onChange={this.handleTypeEvent}
                  value={this.state.studentId}
                />
                <TextField
                  label="Student Name"
                  type="text"
                  variant="outlined"
                  placeholder="Enter Name"
                  name="name"
                  fullWidth={true}
                  required
                  onChange={this.handleTypeEvent}
                  value={this.state.name}
                />
                <TextField
                  label="Address"
                  type="text"
                  variant="outlined"
                  placeholder="Enter Address"
                  name="address"
                  fullWidth={true}
                  onChange={this.handleTypeEvent}
                  value={this.state.address}
                />
                <TextField
                  label="Subjects (Comma separated tags)"
                  type="text"
                  variant="outlined"
                  placeholder="Enter comma separated tags"
                  name="subjects"
                  fullWidth={true}
                  required
                  onChange={this.handleTypeEvent}
                  value={this.state.subjects}
                />
                <button className="py-2 bg-blue-900 text-white rounded">
                  <h6>Save Student</h6>
                </button>
              </form>
            </>
          ) : (
            <>
              <section
                className="w-full h-20 bg-blue-900 text-white text-center text-2xl p-6"
                onClick={this.handleClickEvent}
              >
                Add Student
              </section>
            </>
          )}
        </div>

        <div className="grid grid-cols-3 gap-20">
          {this.state.studentList.map((student) => (
            <Student
              id={student.studentId}
              name={student.name}
              address={student.address}
              subjects={student.subjects}
            />
          ))}
        </div>
      </section>
    );
  }
}
