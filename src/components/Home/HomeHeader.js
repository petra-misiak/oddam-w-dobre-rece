import React from 'react';
import HomeHeroImage from '../../assets/HomeHeroImage.jpg';
import Decoration from '../../assets/Decoration.svg';
import FourSteps from './FourSteps/FourSteps';
import AboutUs from './AboutUs/AboutUs';
import Tabs from './Tabs/Tabs';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import Contact from './Contact/Contact';
import Buttons from '../Buttons.js/Buttons';


const HomeHeader = () => {
    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src={HomeHeroImage} alt="people" className="home-img-img"></img>
                <div className="text">
                    <h2 className="text-title1">Zacznij pomagać!</h2>
                    <h2 className="text-title1">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={Decoration} alt='Decoration' className="text-decoration"></img>
                    <Buttons />
                </div>
            </div>
            <ThreeColumns />
            <FourSteps />
            <AboutUs />
            <Tabs />
            <Contact />

        </section >
    )
}

export default HomeHeader;