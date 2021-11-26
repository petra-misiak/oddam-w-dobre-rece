import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link, BrowserRouter } from 'react-router-dom';
import './_homeHeader.scss';
import HomeHeroImage from '../../assets/HomeHeroImage.jpg';
import Decoration from '../../assets/Decoration.svg';
import Login from '../Register/Login';
import MakeAccount from '../Register/MakeAccount';


const HomeHeader = () => {
    return (
        <nav className="home-header">
            <img src={HomeHeroImage} alt="people" className="home-header-img"></img>
            <div className="home-header-right">
                <div className="home-header-right-top">
                    <BrowserRouter >
                        <Link to="/" component={Login}>Zaloguj</Link>
                        <Link to="/" component={MakeAccount}>Założ konto</Link>
                    </BrowserRouter>
                    {/* </div>
                <div className="home-header-top2"> */}
                    <ul className="home-header-right-top-second">
                        <Scroll
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">Start</Scroll>
                        <Scroll
                            activeClasss="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">O co chodzi?</Scroll>
                        <Scroll
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">O nas</Scroll>
                        <Scroll
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">Fundacja i organizacje</Scroll>
                        <Scroll
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">Kontakt</Scroll>
                    </ul>
                </div>
                <div className="home-header-right-bottom">
                    <h2 className="home-header-right-bottom-title1">Zacznij pomagać!</h2>
                    <h2 className="home-header-right-bottom-title1">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={Decoration} alt='Decoration' className="home-header-right-bottom-decoration"></img>
                    <div className="home-header-right-buttons">
                        <button className="home-header-right-buttons-all">ODDAJ RZECZY</button>
                        <button className="home-header-right-buttons-all">ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default HomeHeader;