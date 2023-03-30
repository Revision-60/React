import { Paper } from "@mui/material";
import { type } from "os";
import { Component } from "react";

type StudentProps = {
  id: string;
  name: string;
  address: string;
  subjects: string[];
};

type StudentState = {};

export default class Student extends Component<StudentProps, StudentState> {
  render() {
    return (
      <Paper elevation={3} className="p-10 text-center">
        <h3 className="text-3xl font-semibold">{this.props.id}</h3>
        <h2 className="text-2xl">{this.props.name}</h2>
        <p className="text-2xl">{this.props.address}</p>
        <div className="flex gap-4 mt-2">
          {this.props.subjects.map((sub) => (
            <span className="p-3 border rounded">{sub}</span>
          ))}
        </div>
      </Paper>
    );
  }
}
