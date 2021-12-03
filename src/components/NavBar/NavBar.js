import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="registration">
            <nav className="registration-top">
                <Link to="/logowanie" className="registration-top-first">Zaloguj</Link>
                <Link to="/rejestracja" className="registration-top-first1">Założ konto</Link>
            </nav>
            <ul className="nav-bar">
                <Link to="/home" className="nav-bar-all">Start</Link>
                <Scroll
                    activeClass="active"
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
        </div>
    )
}
export default NavBar;