import React from 'react';
import "./Skill.css"
import html from "../../../assets/html.png"
import css from "../../../assets/css.png"
import bootstrap from "../../../assets/bootstrap.png"
import Tailwind from "../../../assets/Tailwind.png"
import JavaScript from "../../../assets/javaScript.png"
import ReactImg from "../../../assets/react.png"
import ReactBts from "../../../assets/React-bootstrap.png"
import nodeImg from "../../../assets/node.png"
import expressImg from "../../../assets/express.png"
import mongoDBImg from "../../../assets/monogDB.png"
import jsonImg from "../../../assets/json.png"
import apiImg from "../../../assets/api.png"
import Container from '../../../components/Container';

const Skill = () => {
    return (
        <div id='skill-part'>
            <Container>
                <h1 className='lg:text-3xl md:text-2xl sm:text-1xl font-bold text-white ps-[20px] pt-[20px] uppercase text-center'>My <span className='text-[#00b4d8]'>Skills</span></h1>

                <div className="skill-container grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1 gap-4 mt-10">
                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={html} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>HTML</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={css} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>CSS</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={bootstrap} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Bootstrap</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={Tailwind} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Tailwind</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={ReactImg} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>React</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={ReactBts} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>React Bootstrap</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={JavaScript} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>JavaScript</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={expressImg} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Express JS</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={mongoDBImg} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>MongoDB</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={jsonImg} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Json</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={apiImg} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Api</h2>
                    </div>

                    <div className="skill-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={nodeImg} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Node JS</h2>
                    </div>




                </div>
            </Container>
            
        </div>
    );
};

export default Skill;