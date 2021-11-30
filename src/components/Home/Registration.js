import './_Registration.scss';
import { Link, BrowserRouter } from 'react-router-dom';
import Login from '../Register/Login';
import MakeAccount from '../Register/MakeAccount';

const Registration = () => {
    return (
        <div className="registration-top">
            <BrowserRouter >
                <Link to="/logowanie" component={Login} className="registration-top-first">Zaloguj</Link>
                <Link to="/rejestracja" component={MakeAccount} className="registration-top-first1">Założ konto</Link>
            </BrowserRouter>
        </div>
    )
}
export default Registration;