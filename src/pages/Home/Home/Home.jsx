import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Skill from '../Skill/Skill';
import Choose from '../Choose/Choose';
import Project from '../Project/Project';
import Tools from '../Tools/Tools';
import Contact from '../Contact/Contact';
import { Helmet } from 'react-helmet';



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Choose></Choose>
            <Project></Project>
            <Tools></Tools>
            <Contact></Contact>
           
            
            
        </div>
    );
};

export default Home;