import { Component } from "react";
import { NavLink } from "react-router-dom";
import userImage from "../../assets/user.png";
import logo from "../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default class Header extends Component {
  render() {
    const navStyles = "font-bold border-b-2 text-blue-200";

    return (
      <section className="bg-blue-900 w-full h-20 p-2.5 text-white fixed">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
            <img src={logo} className="w-16 h-16" alt="" />
            <h1 className="pl-6 text-3xl">LOGO</h1>
          </section>
          <section className="h-full w-1/2 flex items-center gap-6 justify-end text-lg">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? navStyles : "")}
            >
              <HomeIcon />
              Home
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? navStyles : "")}
            >
              <InfoIcon />
              About
            </NavLink>

            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? navStyles : "")}
            >
              <ContactPhoneIcon className="mr-1" />
              Contact Us
            </NavLink>

            <NavLink
              to={"/profile"}
              className={({ isActive }) => (isActive ? navStyles : "")}
            >
              <img src={userImage} className="w-10 h-10" alt="" />
            </NavLink>
          </section>
        </div>
      </section>
    );
  }
}
