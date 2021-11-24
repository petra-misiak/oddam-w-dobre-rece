import React from 'react';
import { Link } from 'react-scroll';
import './_homeHeader.scss';
import HomeHeroImage from '../../assets/HomeHeroImage.jpg';
import Decoration from '../../assets/Decoration.svg';


const HomeHeader = () => {
    return (
        <nav className="home-header">
            <img src={HomeHeroImage} alt="people" className="home-header-img"></img>
            <div className="home-header-right">
                <div className="home-header-right-top">
                    <ul className="home-header-right-top-first">
                        <Link
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-first-all">Zaloguj</Link>
                        <Link
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-first-all">Założ konto</Link>
                    </ul>
                    {/* </div>
                <div className="home-header-top2"> */}
                    <ul className="home-header-right-top-second">
                        <Link
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">Start</Link>
                        <Link
                            activeClasss="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">O co chodzi?</Link>
                        <Link
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">O nas</Link>
                        <Link
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">Fundacja i organizacje</Link>
                        <Link
                            activeClass="active"
                            to="carousel"
                            spy={true}
                            offset={-350}
                            duration={500}
                            className="home-header-right-top-second-all">Kontakt</Link>
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