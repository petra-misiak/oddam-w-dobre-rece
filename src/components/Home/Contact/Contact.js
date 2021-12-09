import { useState } from 'react'
import BackgroundContactForm from '../../../assets/BackgroundContactForm.jpg';
import Decoration from '../../../assets/Decoration.svg';
import Facebook from '../../../assets/Facebook.svg';
import Instagram from '../../../assets/Instagram.svg';


const Contact = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const [enteredMessage, setEnteredMessage] = useState('');
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes("@");
    const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    const enteredMessageIsValid = enteredMessage.trim().length === 120;
    const enteredMessageIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true;
    }

    const handleNameInputChange = (event) => {
        setEnteredName(event.target.value);
    };
    const handleEmailInputChange = event => {
        setEnteredEmail(event.target.value)
    };

    const handleMessageInputChange = (event) => {
        setEnteredMessage(event.target.value)
    };

    const handleNameInputBlur = (event) => {
        setEnteredNameTouched(true)
    };

    const handleEmailInputBlur = (event) => {
        setEnteredEmailTouched(true)
    };

    const handleMessageInputBlur = (event) => {
        setEnteredMessageTouched(true)
    };

    const handleFormSubmission = (event) => {
        event.preventDefault();
        const data = { enteredName, enteredEmail, enteredMessage };
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data })
        }).then((response) => (response.json()
        ).then((data) => {
            if (response.ok) {
                console.log("success");
                alert("Wiadomość zostala wyslana");
                return;
            } else if (response.status === 400) {
                console.log("error");
                alert("Wiadomosc nie zostala wyslana, sprobuj ponownie.")
            }
        }).catch(err => {
            // console.log("error")
        })
        )
    }

    const nameInputClasses = nameInputIsInvalid ? 'contact-form-all-name-input-invalid' : 'contact-form-all-name-input';
    const emailInputClasses = enteredEmailIsInvalid ? 'contact-form-all-email-input-invalid' : 'contact-form-all-email-input';
    const messageInputClasses = enteredMessageIsInvalid ? 'contact-form-all-message-textarea-invalid' : 'contact-form-all-message-textarea';

    return (
        <section className="contact" id="contact">
            <div className="contact-left">
                <img src={BackgroundContactForm} alt="Chlothes" className="contact-left-img"></img>
            </div>
            <div className="contact-right">
                <h3 className="contact-right-h3">Skontaktuj się z nami</h3>
                <img src={Decoration} alt="Decoration"></img>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmission}>
                <div className="contact-form-all">
                    <div className="contact-form-all-name">
                        <label htmlFor='name' className="contact-form-all-name-label">Wpisz swoje imię</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className={nameInputClasses}
                            placeholder="Krzysztof"
                            value={enteredName}
                            onChange={handleNameInputChange}
                            onBlur={handleNameInputBlur}
                        />
                        {nameInputIsInvalid && (
                            <p className="error-text">Podane imnię jest nieprawidlowe!</p>
                        )}
                    </div>
                    <div className="contact-form-all-email">
                        <label className="contact-form-all-email-label">Wpisz swój email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className={emailInputClasses}
                            placeholder="abc@xyz.pl"
                            value={enteredEmail}
                            onChange={handleEmailInputChange}
                            onBlur={handleEmailInputBlur}
                        />
                        {enteredEmailIsInvalid && (
                            <p className="error-text">Podany email jest nieprawidlowy!</p>
                        )}
                    </div>
                </div>
                <div className="contact-form-all-message">
                    <label className="contact-form-all-message-label">Wpisz swoją wiadomość</label>
                    <textarea
                        rows="5"
                        id="message"
                        type="text"
                        name="message"
                        className={messageInputClasses}
                        placeholder="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={enteredMessage}
                        onChange={handleMessageInputChange}
                        onBlur={handleMessageInputBlur}
                        maxLength={120}
                    ></textarea>
                    {enteredMessageIsInvalid && (
                        <p className="error-text">Wiadomośc musi mieć conajmniej 120 znaków!</p>
                    )}
                </div>
                <div className="contact-form-all-button">
                    <button className="contact-form-all-button-send" type="submit" disabled={!formIsValid}>Wyślij</button>
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
