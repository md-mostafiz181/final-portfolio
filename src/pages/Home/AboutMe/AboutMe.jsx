import React from "react";
import Container from "../../../components/Container";
import img from "../../../assets/portBg.png";
import { FaAngleRight } from "react-icons/fa";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import github from "../../../assets/github.png";
import linkedIn from "../../../assets/linkedin.png";

const AboutMe = () => {
  return (
    <div id="about-part">
      <Container>
        <div className="about-container flex flex-col sm:flex-row gap-2">
          <div className="about-left flex items-center justify-center w-full h-[500px] bg-[#3a3f9e]">
            <div>
              <img className="img" src={img} alt="" />
            </div>
          </div>
          <div className="about-right w-full px-[14px] bg-[#3a3f9e]">
            <h1 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold text-white ps-[20px] pt-[20px] uppercase">
              About <span className="text-[#00b4d8]">Me</span>{" "}
            </h1>
            <p className="px-4 lg:text-1xl md:text-1xl sm:text-xl primaryFont font-normal text-white mt-3">
              I'm Mostafizur Rahman a passionate web developer. Recently I have
              completed my graduation and a web development course. As a web
              developer my expertise is HTML, CSS, Tailwind, Bootstrap,
              JavaScript, ES6, JQuery, React JS, Next JS, Node JS, Express JS,
              Redux and MongoDB.I'm a problem solver. In my web development
              journey I completed more than 50+ projects, Where I show my skills
              and efforts. I'm a quick learner. I can adapt new technology
              quickly.Thank you.
            </p>

            <div className="px-4 mt-3 lg:text-1xl md:text-1xl sm:text-xl primaryFont font-normal text-[white]">
              <div className="flex">
                <FaAngleRight className="mt-1 text-[#00b4d8] " />
                <p>Building responsive web front-end using ReactJs.</p>
              </div>

              <div className="flex">
                <FaAngleRight className="mt-1 text-[#00b4d8] " />
                <p>Building responsive web front-end using NextJs.</p>
              </div>

              <div className="flex">
                <FaAngleRight className="mt-1 text-[#00b4d8] " />
                <p>
                  {" "}
                  Use various npm packages and libraries for make front-end
                  attractive.
                </p>
              </div>

              <div className="flex">
                <FaAngleRight className="mt-1 text-[#00b4d8] " />
                <p>Creating application back-end in Node.js Express.</p>
              </div>

              <div className="flex">
                <FaAngleRight className="mt-1 text-[#00b4d8] " />
                <p>Use Database MongoDB.</p>
              </div>
            </div>

            <div className="icon-box ms-5 mt-3 mb-4">
              <div className="icon-container grid grid-flow-col gap-4">
                <div className="icon">
                  <Link to="https://github.com/md-mostafiz181" target="_blank">
                    {" "}
                    <img src={github} alt="" />
                  </Link>
                </div>

                <div className="icon">
                  <Link
                    to="https://www.linkedin.com/in/mostafiz181/"
                    target="_blank"
                  >
                    {" "}
                    <img src={linkedIn} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
