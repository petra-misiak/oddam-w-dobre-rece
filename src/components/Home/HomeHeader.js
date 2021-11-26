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
        <section className="home">
            <div className="home-img">
                <img src={HomeHeroImage} alt="people" className="home-img-img"></img>
            </div>
            <nav className="home-right">
                <div className="home-right-top">
                    <BrowserRouter >
                        <Link to="/" component={Login} className="home-right-top-first">Zaloguj</Link>
                        <Link to="/" component={MakeAccount} className="home-right-top-first">Założ konto</Link>
                    </BrowserRouter>
                </div>
                <ul className="home-right-top2">
                    <Scroll
                        activeClass="active"
                        to="carousel"
                        spy={true}
                        offset={-350}
                        duration={500}
                        className="home-right-top2-all">Start</Scroll>
                    <Scroll
                        activeClasss="active"
                        to="carousel"
                        spy={true}
                        offset={-350}
                        duration={500}
                        className="home-right-top2-all">O co chodzi?</Scroll>
                    <Scroll
                        activeClass="active"
                        to="carousel"
                        spy={true}
                        offset={-350}
                        duration={500}
                        className="home-right-top2-all">O nas</Scroll>
                    <Scroll
                        activeClass="active"
                        to="carousel"
                        spy={true}
                        offset={-350}
                        duration={500}
                        className="home-right-top2-all">Fundacja i organizacje</Scroll>
                    <Scroll
                        activeClass="active"
                        to="carousel"
                        spy={true}
                        offset={-350}
                        duration={500}
                        className="home-right-top2-all">Kontakt</Scroll>
                </ul>
                <div className="home-right-bottom">
                    <h2 className="home-right-bottom-title1">Zacznij pomagać!</h2>
                    <h2 className="home-right-bottom-title1">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={Decoration} alt='Decoration' className="home-right-bottom-decoration"></img>
                    <div className="home-right-buttons">
                        <button className="home-right-buttons-all">ODDAJ <br /> RZECZY</button>
                        <button className="home-right-buttons-all">ZORGANIZUJ <br />ZBIÓRKĘ</button>
                    </div>
                </div>
            </nav>
        </section >
    )
}

export default HomeHeader;