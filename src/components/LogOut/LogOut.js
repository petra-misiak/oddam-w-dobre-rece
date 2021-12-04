import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';

const LogOut = () => {
    return (
        <div className="logout">
            <div className="logout-title">
                <h3 className="logout-title-h3">Wylogowanie nastąpiło <br /> pomyślnie!</h3>
                <img src={Decoration} alt="Decoration"></img>
            </div>
            <div className="logout-button">
                <Link to="/home" className="logout-button-link" >Strona główna</Link>
            </div>
        </div>
    )
}

export default LogOut
