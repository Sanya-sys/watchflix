const validateData = (email,pswd) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pswd)

    if(!isEmailValid) return "Email not valid";
    if(!isPasswordValid) return "Password not valid";

    return null;
}

export default validateData