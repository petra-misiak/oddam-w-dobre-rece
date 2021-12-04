import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';

const Login = () => {
    return (
        <section className="register">
            <div className="register-title">
                <h3 className="register-title-h3">Zaloguj się</h3>
                <img src={Decoration} alt="Decoration"></img>
            </div>
            <form className="register-form">
                <div className="register-form-first">
                    <label className="register-form-first-label">Email</label>
                    <input className="register-form-first-input" type="text"></input>
                </div>
                <div className="register-form-second">
                    <label className="register-form-second-label">Hasło</label>
                    <input className="register-form-second-input" type="text"></input>
                </div>
            </form>
            <div className="register-buttons">
                <Link to="/rejestracja" className="register-buttons-login">Założ konto</Link>
                <button className="register-buttons-register">Zaloguj się</button>
            </div>
        </section>
    )
}

export default Login
