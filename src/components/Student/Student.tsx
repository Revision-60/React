import { Paper } from "@mui/material";
import { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <Paper elevation={3} className="p-10 text-center">
        <h3 className="text-3xl font-semibold">S001</h3>
        <h2 className="text-2xl">Gihan</h2>
        <p className="text-2xl">Matara</p>
        <div className="flex gap-4 mt-2">
          <span className="p-3 border rounded">Maths</span>
          <span className="p-3 border rounded">Science</span>
          <span className="p-3 border rounded">English</span>
        </div>
      </Paper>
    );
  }
}
