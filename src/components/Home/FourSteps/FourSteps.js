import Decoration from '../../../assets/Decoration.svg';
import Icon1 from '../../../assets/Icon1.svg';
import Icon2 from '../../../assets/Icon2.svg';
import Icon3 from '../../../assets/Icon3.svg';
import Icon4 from '../../../assets/Icon4.svg';

const FourSteps = () => {
    return (
        <section className="steps" id="steps">
            <div className="steps-top">
                <h2 className="steps-top-h2">Wystarczą 4 proste kroki</h2>
                <img src={Decoration} alt="Decoration"></img>
            </div>
            <div className="steps-middle">
                <div className="steps-middle-all">
                    <div className="steps-middle-all-first">
                        <img src={Icon1} alt="T-shirt" ></img>
                        <h3 className="steps-middle-all-first-h3">Wybierz rzeczy</h3>
                        <p className="steps-middle-all-second-p">ubrania, zabawki, <br />sprzęt i inne</p>
                    </div>
                    <div className="steps-middle-all-second">
                        <img src={Icon2} alt="Bag"></img>
                        <h3 className="steps-middle-all-second-h3">Spakuj je</h3>
                        <p className="steps-middle-all-second-p">skorzystaj z <br /> worków na śmieci</p>
                    </div>
                    <div className="steps-middle-all-third">
                        <img src={Icon3} alt="Loop"></img>
                        <h3 className="steps-middle-all-third-h3">Zdecyduj komu <br />chcesz pomóc</h3>
                        <p className="steps-middle-all-third-p">wybierz zaufane <br />miejsce</p>
                    </div>
                    <div className="steps-middle-all-fourth">
                        <img src={Icon4} alt="Circle"></img>
                        <h3 className="steps-middle-all-fourth-h3">Zamów kuriera</h3>
                        <p className="steps-middle-all-fourth-p">kurier przyjedzie<br /> w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="steps-bottom">
                <button className="steps-bottom-button">ODDAJ <br /> RZECZY</button>
            </div>
        </section>


    )
}

export default FourSteps;