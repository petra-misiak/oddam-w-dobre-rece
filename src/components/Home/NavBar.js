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
                className="nav-bar-all">Start</Scroll>
            <Scroll
                activeClasss="active"
                to="steps"
                spy={true}
                offset={-150}
                duration={500}
                className="nav-bar-all">O co chodzi?</Scroll>
            <Scroll
                activeClass="active"
                to="about"
                spy={true}
                offset={-100}
                duration={500}
                className="nav-bar-all">O nas</Scroll>
            <Scroll
                activeClass="active"
                to="organizations"
                spy={true}
                offset={0}
                duration={500}
                className="nav-bar-all">Fundacja i organizacje</Scroll>
            <Scroll
                activeClass="active"
                to="contact"
                spy={true}
                offset={500}
                duration={500}
                className="nav-bar-all">Kontakt</Scroll>
        </ul>
    )
}
export default NavBar;