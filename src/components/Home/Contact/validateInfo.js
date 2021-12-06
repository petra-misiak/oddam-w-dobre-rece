const validateInfo = (values) => {
    let errors = [];

    // Name
    if (!values.name) {
        errors.name = "Podane imnię jest nieprawidlowe!";
    }
    // Email
    if (!values.name) {
        errors.email = "no";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Podany email jest nieprawidlowy!";
    }
    // Message
    if (values.message.length <= 120) {
        errors.message = "Wiadomośc musi mieć conajmniej 120 znaków!"
    }

    return errors;
}

export default validateInfo;