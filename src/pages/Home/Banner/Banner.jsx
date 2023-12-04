import React from "react";
import portBg from "../../../assets/portBg.png"
import "./Banner.css";
import Container from "../../../components/Container";



const Banner = () => {

  return (
    <div id="banner-part" >
      <Container>
        <div className="banner-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <div className="banner-left h-[500px]">
            <h3 className="lg:text-3xl md:text-2xl sm:text-1xl primaryFont font-bold text-[#00b4d8]">Hello, This is ..</h3>
            <h1 className="lg:text-6xl md:text-3xl sm:text-2xl primaryFont font-bold text-[#00b4d8] my-4">Mostafizur Rahman</h1>
            <h2 className="lg:text-2xl md:text-2xl sm:text-1xl primaryFont font-normal text-white">Front-end Developer</h2>

            <p className="primaryFont sm:text-xl text-white mt-3">A passionate Front-end Developer 🚀 <br />
               having an experience of building Web applications with Tailwind/ JavaScript/ React Js/ Next JS/ Express / MongoDB  and some other cool libraries and frameworks database and tools.</p>

              <a className="btn-resume primaryFont" href="Frontend developer resume of Mostafiz.pdf" download="Frontend developer resume of Mostafiz.pdf">Download Resume</a>
          </div>
          <div className="banner-right flex justify-center items-center h-[500px] ">
            <div className="img-box">
              <img src={portBg} alt="" />

            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Banner;
