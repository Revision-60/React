import { Paper } from "@mui/material";
import { Component } from "react";
import Student from "../../components/Student";

export default class Home extends Component {
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
