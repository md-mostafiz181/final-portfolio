import React from "react";
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import portBg from "../../../assets/portBg.png"
import "./Banner.css";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";


const Banner = () => {

  const handleDownload = ()=>{
    const link = document.createElement('a');
    link.href = '../../../../public/Frontend developer resume of Mostafiz (2).pdf';
    link.download = 'Frontend developer resume of Mostafiz (1).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <div id="banner-part" className="banner-part primaryBg px-2 py-[120px]">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className=" primaryFont lg:text-4xl md:text-3xl sm:text-2xl font-bold">
              {" "}
              <span className="text-[#00b4d8]">Hello,</span>{" "}
              <span className="text-[#00b4d8]">This is...</span>
            </h3>
            <h1 className="text-6xl  font-bold text-[#00b4d8] my-4">
              Mostafizur Rahman
            </h1>
            <p className="lg:text-4xl md:text-4xl sm:text-3xl font-bold text-[#00b4d8]  flex mt-2">
              I'm a{" "}
              <span className="ms-3 text-white">
                <Typewriter
                  options={{
                    strings: [
                      " Front-end Developer",
                      " React Developer",
                      " Mern Stack Developer",
                      " Web Designer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>


            

            

            <div className="w-[130px]  mt-4">
              <div className="flex justify-between">
                <div className="item w-[50px] h-[50px] secondaryBg hover:bg-white cursor-pointer transition-all rounded-full flex justify-center items-center">
                  <Link to="https://github.com/md-mostafiz181" target="_blank">
                    <FaGithub className="text-4xl text-[#00b4d8]" />
                  </Link>
                </div>
                <div className="item w-[50px] h-[50px] secondaryBg hover:bg-white cursor-pointer transition-all rounded-full flex justify-center items-center">
                  <Link
                    to="https://www.linkedin.com/in/mostafiz181/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-4xl text-[#00b4d8]" />
                  </Link>
                </div>
              </div>
            </div>

            <button onClick={handleDownload} className="btn-cv text-white  mb-5">Download Resume</button>

            
          </div>

          <div className="box w-[350px] h-[350px] secondaryBg rounded-full">
            <img className="img" src={portBg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
