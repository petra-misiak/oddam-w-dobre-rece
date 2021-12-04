import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div className="buttons">
            <Link to="/oddaj-rzecy" className="buttons-all">ODDAJ <br /> RZECZY</Link>
            <Link to="/zbiorka" className="buttons-all">ZORGANIZUJ <br /> ZBIÓRKĘ</Link>
        </div>
    )
}

export default Buttons;