import React from 'react';
import './_homeHeader.scss';
import HomeHeroImage from '../../assets/HomeHeroImage.jpg';
import Text from './Text';
import Buttons from './Buttons';
import NavBar from './NavBar';
import Registration from './Registration';


const HomeHeader = () => {
    return (
        <section className="home">
            <div className="home-img">
                <img src={HomeHeroImage} alt="people" className="home-img-img"></img>
            </div>
            <nav className="home-right">
                <Registration />
                <NavBar />
                <Text />
                <Buttons />
            </nav>
        </section >
    )
}

export default HomeHeader;