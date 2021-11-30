import { Link as Scroll } from 'react-scroll';

const NavBar = () => {
    return (
        <ul className="nav-bar">
            <Scroll
                activeClass="active"
                to="start"
                spy={true}
                offset={-350}
                duration={500}
                className="nav-bar-all" id="start">Start</Scroll>
            <Scroll
                activeClasss="active"
                to="steps"
                spy={true}
                offset={0}
                duration={500}
                className="nav-bar-all">O co chodzi?</Scroll>
            <Scroll
                activeClass="active"
                to="about"
                spy={true}
                offset={0}
                duration={500}
                className="nav-bar-all">O nas</Scroll>
            <Scroll
                activeClass="active"
                to="carousel"
                spy={true}
                offset={-350}
                duration={500}
                className="nav-bar-all">Fundacja i organizacje</Scroll>
            <Scroll
                activeClass="active"
                to="carousel"
                spy={true}
                offset={-350}
                duration={500}
                className="nav-bar-all">Kontakt</Scroll>
        </ul>
    )
}
export default NavBar;