import React from 'react';
import Container from '../../../components/Container';
import port1 from "../../../assets/portfolio1.png"
import port2 from "../../../assets/Portfolio2.png"
import port3 from "../../../assets/portfolio3.png"
import "./Project.css"
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div id='project-part'>
            <Container>
            <h1 className='lg:text-3xl md:text-2xl sm:text-1xl font-bold text-white ps-[20px] pt-[20px] uppercase text-center'>My <span className='text-[#00b4d8]'>Projects</span> </h1>

            <div className="project-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-[50px]">
                <div className="project-item w-full bg-[#3a3f9e] h-[730px]">
                    <div className="project-photo h-[300px]  mx-3 my-3 ">
                        <img src={port1} alt="" />
                    </div>

                    <h1 className='ms-3 lg:text-2xl md:text-1xl sm:text-xl font-bold text-white'>RedX</h1>
                    <p className='ms-3 text-xl text-[#00b4d8] primaryFont mt-4'>RedX is a product delivery website. It's a front-end focued website. Here user can get idea about a how can they delivery their products.</p>

                    <h3 className='ms-3 text-white font-bold primaryFont text-xl mt-2'>Technology Used</h3>

                        <div className="tech-btn  mx-3 mt-4">
                           
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#HTML</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#CSS</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Tailwind</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#JavaScript</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#React</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Firebase</button>


                        </div>

                        <div className="code-btn">
                            <Link to="https://earnest-dodol-18c808.netlify.app/" target='_blank'><button>Live Preview</button></Link>
                            <Link to="https://github.com/md-mostafiz181/Fast-Jao-React" target='_blank'><button>
                                
                                Github Link</button></Link>
                            
                            
                        </div>
                </div>
                <div className="project-item w-full bg-[#3a3f9e] h-[730px]">
                    <div className="project-photo h-[300px]  mx-3 my-3 ">
                        <img src={port2} alt="" />
                    </div>

                    <h1 className='ms-3 lg:text-2xl md:text-1xl sm:text-xl font-bold text-white'>Fractos ( Team Project )</h1>
                    <p className='ms-3 text-xl text-[#00b4d8] primaryFont mt-4'>Fractos is an online educational platform. Where student attend for mock test, mcq exams, university admission or academic exams.</p>

                    <h3 className='ms-3 text-white font-bold primaryFont text-xl mt-2'>Technology Used</h3>

                        <div className="tech-btn  mx-3 mt-4">
                           
                          
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Tailwind</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#JavaScript</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Next JS</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Firebase</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Mongoose</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#MongoDB</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Stripe</button>


                        </div>

                        <div className="code-btn">
                           <Link to= "https://fractos-client.vercel.app/" target='_blank'> <button>Live Preview</button></Link>
                            <Link to="https://github.com/md-mostafiz181/Fractos-client" target='_blank'><button>Github Link</button></Link>
                            
                            
                        </div>
                </div>
                <div className="project-item w-full bg-[#3a3f9e] h-[730px]">
                    <div className="project-photo h-[300px]  mx-3 my-3 ">
                        <img src={port3} alt="" />
                    </div>

                    <h1 className='ms-3 lg:text-2xl md:text-1xl sm:text-xl font-bold text-white'>Music Hunt ( Instrument learning School )</h1>
                    <p className='ms-3 text-xl text-[#00b4d8] primaryFont mt-4'>It's a music instrument learning school website. Where user buy their desire course with stripe payment gateway.</p>

                    <h3 className='ms-3 text-white font-bold primaryFont text-xl mt-2'>Technology Used</h3>

                        <div className="tech-btn  mx-3 mt-4">
                           
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#HTML</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#CSS</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Tailwind</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#JavaScript</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#React</button>
                           <button className='px-3 py-1 bg-[#130f40] text-white font-bold rounded-lg'>#Firebase</button>


                        </div>

                        <div className="code-btn">
                            <Link to= "https://quiet-bonbon-08a110.netlify.app/" target='_blank'><button>Live Preview</button></Link>
                            <Link to="https://github.com/md-mostafiz181/music-instrument-client" target='_blank'><button>Client Code</button></Link>
                            <Link to="https://github.com/md-mostafiz181/music-instrument-server" target='_blank'><button>Server Code</button></Link>
                            
                        </div>
                </div>


            </div>

            </Container>
            
        </div>
    );
};

export default Project;