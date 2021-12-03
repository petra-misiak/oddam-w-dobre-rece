import React from 'react';
import ColumnsBackground from '../../../assets/ColumnsBackground.png';

const ThreeColumns = () => {
    return (
        <section className="columns">
            <div className="columns-background">
                <img src={ColumnsBackground} alt="background" className="columns-background-img"></img>
            </div>
            <div className="columns-all">
                <div className="columns-all-first">
                    <h2 className="columns-all-first-h2">10</h2>
                    <h3 className="columns-all-first-h3">ODDANYCH WORKOW</h3>
                    <p className="columns-all-first-paragraph">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="columns-all-second">
                    <h2 className="columns-all-second-h2">5</h2>
                    <h3 className="columns-all-second-h3">WSPARTYCH ORGANIZACJI</h3>
                    <p className="columns-all-second-paragraph">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="columns-all-third">
                    <h2 className="columns-all-third-h2">7</h2>
                    <h3 className="columns-all-third-h3">ZORGANIZOWANY ZBIÓREK</h3>
                    <p className="columns-all-third-paragraph">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </section>
    )
}

export default ThreeColumns;