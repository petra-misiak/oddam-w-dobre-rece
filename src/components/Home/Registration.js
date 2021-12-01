import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <nav className="registration-top">
            <Link to="/logowanie" className="registration-top-first">Zaloguj</Link>
            <Link to="/rejestracja" className="registration-top-first1">Założ konto</Link>
        </nav>
    )
}
export default Registration;