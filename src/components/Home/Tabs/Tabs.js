import React, { useState } from 'react';
import Decoration from '../../../assets/Decoration.svg';

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="container" id="organizations">
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
                        Fundacji, z <br />którymi współpracujemy. Możesz sprawdzić czym się zajmują
                    </h3>
                    <div className="content-tabs-list">
                        <div className="content-tabs-list-first">
                            <h4 className="content-tabs-list-first-h4">Fundacja “Dbam o Zdrowie”</h4>
                            <p className="content-tabs-list-first-p1">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            <p className="content-tabs-list-first-p2">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            <hr />
                        </div>
                        <div className="content-tabs-list-second">
                            <h4 className="content-tabs-list-second-h4">Fundacja “Dla dzieci”</h4>
                            <p className="content-tabs-list-second-p1">ubrania, meble, zabawki</p>
                            <p className="content-tabs-list-second-p2">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            <hr />
                        </div>
                        <div className="content-tabs-list-third">
                            <h4 className="content-tabs-list-third-h4">Fundacja “Bez domu”</h4>
                            <p className="content-tabs-list-third-p1">ubrania, jedzenie, ciepłe koce</p>
                            <p className="content-tabs-list-third-p2">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h3>Nori grape silver beet broccoli kombu beet greens <br />fava bean potato
                        quandong celery greens parsnip.</h3>
                    <div className="content-tabs-list">
                        <div className="content-tabs-list-first">
                            <h4 className="content-tabs-list-first-h4">Organizacja "Lorem Ipsum 1"</h4>
                            <p className="content-tabs-list-first-p1">Egestes, sed, tempus</p>
                            <p className="content-tabs-list-first-p2">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            <hr />
                        </div>
                        <div className="content-tabs-list-second">
                            <h4 className="content-tabs-list-second-h4">Organizacja "Lorem Ipsum 2"</h4>
                            <p className="content-tabs-list-second-p1">ubrania, meble, zabawki</p>
                            <p className="content-tabs-list-second-p2">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            <hr />
                        </div>
                        <div className="content-tabs-list-third">
                            <h4 className="content-tabs-list-third-h4">Organizacja "Lorem Ipsum 3"</h4>
                            <p className="content-tabs-list-third-p1">ubrania, jedzenie, ciepłe koce</p>
                            <p className="content-tabs-list-third-p2">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h3>Lorem ipsum dolor sit amet, consectetur
                    adipisc Pellentesque vel enim a <br /> viverra elementuma. Aliquam erat volutpat.</h3>
                <div className="content-tabs-list">
                    <div className="content-tabs-list-first">
                        <h4 className="content-tabs-list-first-h4">Zbiórka “Dbam o Zdrowie”</h4>
                        <p className="content-tabs-list-first-p1">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        <p className="content-tabs-list-first-p2">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        <hr />
                    </div>
                    <div className="content-tabs-list-second">
                        <h4 className="content-tabs-list-second-h4">Zbiórka “Dla dzieci”</h4>
                        <p className="content-tabs-list-second-p1">ubrania, meble, zabawki</p>
                        <p className="content-tabs-list-second-p2">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        <hr />
                    </div>
                    <div className="content-tabs-list-third">
                        <h4 className="content-tabs-list-third-h4">Zbiórka “Bez domu”</h4>
                        <p className="content-tabs-list-third-p1">ubrania, jedzenie, ciepłe koce</p>
                        <p className="content-tabs-list-third-p2">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                </div>
            </div>
            <div className="block-numbers">
                <button className={toggleState === 1 ? "numbers active-numbers" : "numbers"}
                    onClick={() => toggleTab(1)}>1</button>
                <button className={toggleState === 2 ? "numbers active-numbers" : "numbers"}
                    onClick={() => toggleTab(2)}>2</button>
                <button className={toggleState === 3 ? "numbers active-numbers" : "numbers"}
                    onClick={() => toggleTab(3)}>3</button>
            </div>
        </section>
    )
}

export default Tabs;