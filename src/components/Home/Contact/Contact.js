import { useState, useEffect } from 'react'
import BackgroundContactForm from '../../../assets/BackgroundContactForm.jpg';
import Decoration from '../../../assets/Decoration.svg';
import Facebook from '../../../assets/Facebook.svg';
import Instagram from '../../../assets/Instagram.svg';
// import useForm from './useForm';
import validate from './validateInfo';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    useEffect(() => {
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        }).then(
            (response) => (response.json()
            ).then((reponse) => {
                if (response.status === "success") {
                    alert("Wiadomość zostala wyslana");

                } else if (response.status === "fail") {
                    alert("Wiadomosc nie zostala wyslana, sprobuj ponownie.")
                }
            })
        )
    })


    const handleNameChange = (event) => {
        setName(event.target.value)
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-left">
                <img src={BackgroundContactForm} alt="Chlothes" className="contact-left-img"></img>
            </div>
            <div className="contact-right">
                <h3 className="contact-right-h3">Skontaktuj się z nami</h3>
                <img src={Decoration} alt="Decoration"></img>
            </div>
            <form className="contact-form" >
                <div className="contact-form-all">
                    <div className="contact-form-all-name">
                        <label className="contact-form-all-name-label">Wpisz swoje imię</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="contact-form-all-name-input"
                            placeholder="Krzysztof"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="contact-form-all-email">
                        <label className="contact-form-all-email-label">Wpisz swój email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="contact-form-all-email-input"
                            placeholder="abc@xyz.pl"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                </div>
                <div className="contact-form-all-message">
                    <label className="contact-form-all-message-label">Wpisz swoją wiadomość</label>
                    <textarea
                        id="message"
                        type="text"
                        name="message"
                        className="contact-form-all-message-textarea"
                        placeholder="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam,quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>
                <div className="contact-form-all-button">
                    <button className="contact-form-all-button-send" type="submit">Wyślij</button>
                </div>
            </form>
            <div className="contact-footer">
                <div className="contact-footer-rights">
                    <p>Copyright by Coders Lab</p>
                </div>
                <div className="contact-footer-icons">
                    <img src={Facebook} alt="Facebook-Icon" className="contact-footer-icons-fb"></img>
                    <img src={Instagram} alt="Instagram-Icon" className="contact-footer-icons-insta"></img>
                </div>
            </div>
        </section>
    )
}

export default Contact;
