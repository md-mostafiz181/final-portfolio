import React from "react";
import Container from "../../../components/Container";
import team from "../../../assets/team.gif";
import technology from "../../../assets/technology.gif";
import commuication from "../../../assets/communication.gif";
import "./Choose.css";

const Choose = () => {
  return (
    <div id="choose-part">
      <Container>
        <h1 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold text-white ps-[20px] pt-[20px] uppercase text-center">
          Why <span className="text-[#00b4d8]">Me </span>
        </h1>

        <div className="choose-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
          <div className="choose-item flex justify-center items-center">
            <div className="inner-box">
              <img src={team} alt="" />
            </div>
            <div className="text">
              <h1 className="text-white text-1xl font-bold mt-2">Team Work</h1>
            </div>
          </div>
          <div className="choose-item">
            <div className="inner-box">
              <img src={technology} alt="" />
            </div>

            <div className="text">
              <h1 className="text-white text-1xl font-bold mt-2">New Technology</h1>
            </div>
          </div>
          <div className="choose-item">
            <div className="inner-box">
              <img src={commuication} alt="" />
            </div>

            <div className="text">
              <h1 className="text-white text-1xl font-bold mt-2">Good Communication</h1>
            </div>
          </div>
          <div className="choose-item">
            <div className="inner-box">
              <img src={technology} alt="" />
            </div>

            <div className="text">
              <h1 className="text-white text-1xl font-bold mt-2">Creative Design</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Choose;
