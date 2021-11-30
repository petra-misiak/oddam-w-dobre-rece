import React, { useState } from 'react';
import './_Tabs.scss';
import Decoration from '../../assets/Decoration.svg';

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="container">
            <div className="container-title">
                <h2 className="container-title-h2">Komu pomagamy?</h2>
                <img src={Decoration} alt="Decoration" className="container-title-img"></img>
            </div>
            <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>Fundacjom</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>Organizacjom <br />pozarządowym</button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>Lokalnym <br />zbiórkom</button>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h3>W naszej bazie znajdziesz listę zweryfikowanych
                        Fundacji, z <br />którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                        <br />komu pomagają i czego potrzebują.</h3>
                    <ul>
                        <li>Fundacja “Dbam o Zdrowie”</li>
                        <li>Fundacja “Dla dzieci”</li>
                        <li>Fundacja “Bez domu”</li>
                    </ul>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h3>Nori grape silver beet broccoli kombu beet greens <br />fava bean potato
                        quandong celery greens parsnip.</h3>
                    <ul>
                        <li>Zbiorka "Lorem ipsum1"</li>
                        <li>Zbiorka "Lorem ipsum2"</li>
                        <li>Zbiorka "Lorem ipsum3"</li>
                    </ul>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h3>Lorem ipsum dolor sit amet, consectetur
                        adipisc Pellentesque vel enim a <br /> viverra elementuma. Aliquam erat volutpat.</h3>
                    <ul>
                        <li>Zbiorka "Lorem ipsum1"</li>
                        <li>Zbiorka "Lorem ipsum2"</li>
                        <li>Zbiorka "Lorem ipsum3"</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Tabs;