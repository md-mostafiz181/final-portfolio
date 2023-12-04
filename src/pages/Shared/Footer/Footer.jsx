import React from "react";
import Container from "../../../components/Container";
import github from "../../../assets/github.png"
import linkedIn from "../../../assets/linkedin.png"
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer-part">
      <Container>
        <footer className="footer footer-center p-10 text-primary-content">
          <aside>
            <p className="font-bold text-1xl">
              Md. Mostafizur Rahman <br />
              dev.mostafizurrahman@gmail.com
            </p>
            <p>WhatsApp: +8801303482292</p>
          </aside>
          <nav>
            <div className="icon-container grid grid-flow-col gap-4">
                <div className="icon">
                   <Link to="https://github.com/md-mostafiz181" target="_blank"
                   > <img src={github} alt="" /></Link>
                </div>

                <div className="icon">
                   <Link to="https://www.linkedin.com/in/mostafiz181/" target="_blank"
                   > <img src={linkedIn} alt="" /></Link>
                </div>
                
            </div>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
