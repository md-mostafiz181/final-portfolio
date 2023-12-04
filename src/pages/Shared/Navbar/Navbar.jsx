import React from "react";
import "./Navbar.css";
// import logo from "../../../assets/logo (2).png"
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOption = (
    <>
      <Link to="/">
        <li className="uppercase ">
          <a>Home</a>
        </li>
      </Link>
      <Link to="/about">
        <li className="uppercase">
          <a>About</a>
        </li>
      </Link>

        <Link to="/skills">
        <li className="uppercase">
        <a>Skill</a>
      </li>
        </Link>

        <Link to="/project">
        <li className="uppercase">
        <a>Project</a>
      </li>
      </Link>

      <Link to="/contact">
      <li className="uppercase">
        <a>Contact</a>
      </li>
      </Link>

    </>
  );
  return (
    <div
      id="navbar-part"
      className="text-white primaryBg primaryFont font-bold px-2 "
    >
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2  rounded-box w-52"
              >
                {navOption}
              </ul>
            </div>
            <a className="text-xl">
              {/* <img className="w-[120px] h-[40px]" src={logo} alt="logo" /> */}
              <Link to="/">
              <h1 className="text-white">
                Mosta<span className="text-[#00b4d8] font-bold">Fiz</span>{" "}
              </h1>
              </Link>
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Navbar;
