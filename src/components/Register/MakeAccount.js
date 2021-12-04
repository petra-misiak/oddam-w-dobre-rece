import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';


const MakeAccount = () => {
    return (
        <section className="register">
            <div className="register-title">
                <h3 className="register-title-h3">Założ konto</h3>
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
                <div className="register-form-third">
                    <label className="register-form-third-label">Powtórz hasło</label>
                    <input className="register-form-third-input" type="text"></input>
                </div>
            </form>
            <div className="register-buttons">
                <Link to="/logowanie" className="register-buttons-login">Zaloguj się</Link>
                <button className="register-buttons-register">Załóż konto</button>
            </div>
        </section>
    )
}

export default MakeAccount;