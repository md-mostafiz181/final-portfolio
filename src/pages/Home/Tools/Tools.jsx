import React from 'react';
import Container from '../../../components/Container';
import firebase from "../../../assets/firebase.png"
import netlify from "../../../assets/netlify.png"
import devtools from "../../../assets/devtools.png"
import git from "../../../assets/git.png"
import vscode from "../../../assets/vs.png"
import "./Tools.css"

const Tools = () => {
    return (
        <div id='tools-part'>
            <Container>
            <h1 className='lg:text-3xl md:text-2xl sm:text-1xl font-bold text-white ps-[20px] pt-[20px] uppercase text-center'>Uses <span className='text-[#00b4d8]'>Tools</span> </h1>

            <div className="tools-container grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 gap-4 mt-10">

                    <div className="tools-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={firebase} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Firebase</h2>
                    </div>

                    <div className="tools-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={netlify} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Netlify</h2>
                    </div>

                    <div className="tools-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={devtools} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Dev tools</h2>
                    </div>

                    <div className="tools-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={git} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Git</h2>
                    </div>

                    <div className="tools-box flex justify-center items-center">
                        <div className="inner-box">
                            <img src={vscode} alt="" />
                            
                        </div>
                        <h2 className='text-white font-bold primaryFont'>Vs Code</h2>
                    </div>










                </div>
            </Container>
            
        </div>
    );
};

export default Tools;